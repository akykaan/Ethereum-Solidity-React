// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Greeter {
    string greeting;

    constructor(string memory __greeting) {
        console.log(" Deploying a Greeter with greeting ", __greeting);

        greeting = __greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory __greeting) public {
        console.log(
            " Changing greeting from '%s' to '%s'",
            greeting,
            __greeting
        );
        greeting = __greeting;
    }
}
