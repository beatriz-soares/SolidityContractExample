var abi = [{"constant":true,"inputs":[{"name":"person","type":"address"}],"name":"get_ecg_data","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256[600]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"person","type":"address"},{"name":"allowed","type":"bool"}],"name":"set_permission","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"peopleMap","outputs":[{"name":"name","type":"string"},{"name":"id","type":"string"},{"name":"isSet","type":"bool"},{"name":"hasPermission","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"person","type":"address"}],"name":"get_permission","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"},{"name":"_name","type":"string"},{"name":"_id","type":"string"}],"name":"set_data","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"},{"name":"_descricao","type":"string"},{"name":"_dados","type":"uint256[600]"}],"name":"set_ecg_data","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"ECGMap","outputs":[{"name":"descricao","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"person","type":"address"}],"name":"get_data","outputs":[{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]
var bin = "0x60806040526202a30060005534801561001757600080fd5b5033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506113f1806100686000396000f30060806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303ff1cda146100935780632a8c70551461017f578063565d3d69146101ce57806380dcf5671461030c5780638901c5e61461036757806398e65dcc146104365780639f92fb56146104f1578063e01fb046146105ad575b600080fd5b34801561009f57600080fd5b506100d4600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506106d5565b60405180806020018361025860200280838360005b838110156101045780820151818401526020810190506100e9565b50505050905001828103825284818151815260200191508051906020019080838360005b83811015610143578082015181840152602081019050610128565b50505050905090810190601f1680156101705780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561018b57600080fd5b506101cc600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050610849565b005b3480156101da57600080fd5b5061020f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061096c565b6040518080602001806020018515151515815260200184151515158152602001838103835287818151815260200191508051906020019080838360005b8381101561026757808201518184015260208101905061024c565b50505050905090810190601f1680156102945780820380516001836020036101000a031916815260200191505b50838103825286818151815260200191508051906020019080838360005b838110156102cd5780820151818401526020810190506102b2565b50505050905090810190601f1680156102fa5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b34801561031857600080fd5b5061034d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ae6565b604051808215151515815260200191505060405180910390f35b34801561037357600080fd5b50610434600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610c3a565b005b34801561044257600080fd5b506104ef600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929080614b0001906102588060200260405190810160405280929190826102586020028082843782019150505050509192919290505050610e6a565b005b3480156104fd57600080fd5b50610532600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061103c565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610572578082015181840152602081019050610557565b50505050905090810190601f16801561059f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156105b957600080fd5b506105ee600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506110f2565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b83811015610632578082015181840152602081019050610617565b50505050905090810190601f16801561065f5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561069857808201518184015260208101905061067d565b50505050905090810190601f1680156106c55780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b60606106df6112ba565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101818054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107f85780601f106107cd576101008083540402835291602001916107f8565b820191906000526020600020905b8154815290600101906020018083116107db57829003601f168201915b50505050509150806102588060200260405190810160405280929190826102588015610839576020028201915b815481526020019060010190808311610825575b5050505050905091509150915091565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561090e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260098152602001807f464f5242494444454e000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b80600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160016101000a81548160ff0219169083151502179055505050565b6001602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a185780601f106109ed57610100808354040283529160200191610a18565b820191906000526020600020905b8154815290600101906020018083116109fb57829003601f168201915b505050505090806001018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ab65780601f10610a8b57610100808354040283529160200191610ab6565b820191906000526020600020905b815481529060010190602001808311610a9957829003601f168201915b5050505050908060020160009054906101000a900460ff16908060020160019054906101000a900460ff16905084565b60008173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610b6f5750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1515610be3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260098152602001807f464f5242494444454e000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160019054906101000a900460ff169050919050565b60011515600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160019054906101000a900460ff1615151480610ce95750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1515610d5d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f5468697320696e666f206973207265737472696374656400000000000000000081525060200191505060405180910390fd5b81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000019080519060200190610db39291906112df565b5080600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001019080519060200190610e0a9291906112df565b5060018060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160006101000a81548160ff021916908315150217905550505050565b60011515600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160019054906101000a900460ff1615151480610f195750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1515610f8d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f5468697320696e666f206973207265737472696374656400000000000000000081525060200191505060405180910390fd5b81600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000019080519060200190610fe39291906112df565b5080600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001019061025861103692919061135f565b50505050565b6002602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110e85780601f106110bd576101008083540402835291602001916110e8565b820191906000526020600020905b8154815290600101906020018083116110cb57829003601f168201915b5050505050905081565b606080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101818054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561120e5780601f106111e35761010080835404028352916020019161120e565b820191906000526020600020905b8154815290600101906020018083116111f157829003601f168201915b50505050509150808054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112aa5780601f1061127f576101008083540402835291602001916112aa565b820191906000526020600020905b81548152906001019060200180831161128d57829003601f168201915b5050505050905091509150915091565b614b006040519081016040528061025890602082028038833980820191505090505090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061132057805160ff191683800117855561134e565b8280016001018555821561134e579182015b8281111561134d578251825591602001919060010190611332565b5b50905061135b91906113a0565b5090565b82610258810192821561138f579160200282015b8281111561138e578251825591602001919060010190611373565b5b50905061139c91906113a0565b5090565b6113c291905b808211156113be5760008160009055506001016113a6565b5090565b905600a165627a7a7230582049a1a04539088e5c62a0e28d2687a4befaac3aff2531c1a061738e341afbee940029"
var config = {
                from: web3.eth.accounts[0],
                data: bin,
                gas: 4700000
    };
var callback = function(e, contract){
	console.log(e, contract);
	if (typeof contract.address !== 'undefined') {
         console.log('Contrato minerado! endereço: ' + contract.address);
    }

};

var contract_factory = web3.eth.contract(abi);
var contract = contract_factory.new(config, callback);