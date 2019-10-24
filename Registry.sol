pragma solidity >=0.4.18;

import "./Utils.sol"; // string concatenation
import "./Constants.sol"; // useful constants, for example default permission timespan

contract Registry is Utils, Constants {

    /**
     *  STRUCTS
     */

    // Basic struct for person info
    struct Person {
        string name;
        string id;
        bool isSet;
        bool hasPermission;
    }

    struct ECG{
        string descricao;
        uint[600] dados;
    }

    /**
     *  ATTRIBUTES
     */

    // Works like a hash table to easy address lookup
    mapping(address => Person) public peopleMap;

    mapping(address => ECG) public ECGMap;

    // The central authority
    address gov_address;

    constructor() public {
        gov_address = msg.sender;
    }

    /**
     *  MODIFIERS
     */

    modifier staffOnly(){
        require (peopleMap[msg.sender].hasPermission == true || msg.sender == gov_address, "This info is restricted");
        _;
    }

    /**
     *  FUNCTIONS
     */

    function set_data(address addr, string memory _name, string memory _id) public staffOnly {
        peopleMap[addr].name = _name;
        peopleMap[addr].id = _id;
        peopleMap[addr].isSet = true;
    }

    function get_data(address person) public view returns (string memory, string memory) {
        return (peopleMap[person].name, peopleMap[person].id);
    }

    function set_permission(address person, bool allowed) public {

        require(msg.sender == gov_address, "FORBIDDEN");
        peopleMap[person].hasPermission = allowed;
    }

    function get_permission(address person) public view returns (bool) {
        /**
        Fails if:
            - you're not the person or the government
         */
        require(msg.sender == person || msg.sender == gov_address, "FORBIDDEN");

        return peopleMap[person].hasPermission;
    }

    function set_ecg_data(address addr, string memory _descricao, uint[600] _dados) public staffOnly {
        ECGMap[addr].descricao = _descricao;
        ECGMap[addr].dados = _dados;
    }

    function get_ecg_data(address person) public view returns (string memory, uint[600]) {
        return (ECGMap[person].descricao, ECGMap[person].dados);
    }

}
