pragma solidity ^0.4.11;
import './ERC20Token.sol';
import './TokenHolder.sol';
import './Owned.sol';
import './interfaces/ISmartToken.sol';

/*
    Smart Token v0.3

    'Owned' is specified here for readability reasons
*/
contract SmartToken is ISmartToken, Owned, ERC20Token, TokenHolder {
    string public version = '0.3';

    bool public transfersEnabled = true;    // true if transfer/transferFrom are enabled, false if not

    // triggered when a smart token is deployed - the _token address is defined for forward compatibility, in case we want to trigger the event from a factory
    event NewSmartToken(address _token);
    

    /**
        @dev constructor

        @param _name       token name
        @param _symbol     token short symbol, minimum 1 character
        @param _decimals   for display purposes only
    */
    function SmartToken(string _name, string _symbol, uint8 _decimals, uint256 _totalSupply)
        ERC20Token(_name, _symbol, _decimals, _totalSupply)
    {
        NewSmartToken(address(this));
    }

    // allows execution only when transfers aren't disabled
    modifier transfersAllowed {
        assert(transfersEnabled);
        _;
    }

    /**
        @dev disables/enables transfers
        can only be called by the contract owner

        @param _disable    true to disable transfers, false to enable them
    */
    function disableTransfers(bool _disable) public ownerOnly {
        transfersEnabled = !_disable;
    }

 

    // ERC20 standard method overrides with some extra functionality

    /**
        @dev send coins
        throws on any error rather then return a false flag to minimize user errors
        in addition to the standard checks, the function throws if transfers are disabled

        @param _to      target address
        @param _value   transfer amount

        @return true if the transfer was successful, false if it wasn't
    */
    function transfer(address _to, uint256 _value) public transfersAllowed returns (bool success) {
        assert(super.transfer(_to, _value));
        return true;
    }

    /**
        @dev an account/contract attempts to get the coins
        throws on any error rather then return a false flag to minimize user errors
        in addition to the standard checks, the function throws if transfers are disabled

        @param _from    source address
        @param _to      target address
        @param _value   transfer amount

        @return true if the transfer was successful, false if it wasn't
    */
    function transferFrom(address _from, address _to, uint256 _value) public transfersAllowed returns (bool success) {
        assert(super.transferFrom(_from, _to, _value));
        return true;
    }
}