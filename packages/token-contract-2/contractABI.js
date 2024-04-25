module.exports = [
	{
		constant: true,
		inputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		name: "pubTokens",
		outputs: [
			{
				name: "name",
				type: "bytes16"
			},
			{
				name: "symbol",
				type: "bytes16"
			},
			{
				name: "addr",
				type: "address"
			},
			{
				name: "decimals",
				type: "uint8"
			},
			{
				name: "website",
				type: "bytes32"
			},
			{
				name: "email",
				type: "bytes32"
			},
			{
				name: "isValid",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "",
				type: "address"
			}
		],
		name: "idMap",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [],
		name: "owner",
		outputs: [
			{
				name: "",
				type: "address"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [],
		name: "tokenCount",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [],
		name: "tokenValidCount",
		outputs: [
			{
				name: "",
				type: "uint256"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "",
				type: "address"
			}
		],
		name: "moderator",
		outputs: [
			{
				name: "",
				type: "bool"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		constant: false,
		inputs: [
			{
				name: "addr",
				type: "address"
			}
		],
		name: "addModerator",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "addr",
				type: "address"
			}
		],
		name: "removeModerator",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "name",
				type: "bytes16"
			},
			{
				name: "symbol",
				type: "bytes16"
			},
			{
				name: "addr",
				type: "address"
			},
			{
				name: "decimals",
				type: "uint8"
			},
			{
				name: "website",
				type: "bytes32"
			},
			{
				name: "email",
				type: "bytes32"
			}
		],
		name: "addSetToken",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "addr",
				type: "address"
			}
		],
		name: "disableToken",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: false,
		inputs: [
			{
				name: "addr",
				type: "address"
			}
		],
		name: "enableToken",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "addr",
				type: "address"
			}
		],
		name: "getToken",
		outputs: [
			{
				name: "",
				type: "bytes16"
			},
			{
				name: "",
				type: "bytes16"
			},
			{
				name: "",
				type: "address"
			},
			{
				name: "",
				type: "uint8"
			},
			{
				name: "",
				type: "bytes32"
			},
			{
				name: "",
				type: "bytes32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "id",
				type: "uint256"
			}
		],
		name: "getTokenById",
		outputs: [
			{
				name: "",
				type: "bytes16"
			},
			{
				name: "",
				type: "bytes16"
			},
			{
				name: "",
				type: "address"
			},
			{
				name: "",
				type: "uint8"
			},
			{
				name: "",
				type: "bytes32"
			},
			{
				name: "",
				type: "bytes32"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [
			{
				name: "_owner",
				type: "address"
			},
			{
				name: "name",
				type: "bool"
			},
			{
				name: "website",
				type: "bool"
			},
			{
				name: "email",
				type: "bool"
			},
			{
				name: "count",
				type: "uint256"
			}
		],
		name: "getAllBalance",
		outputs: [
			{
				name: "",
				type: "bytes"
			}
		],
		payable: false,
		stateMutability: "view",
		type: "function"
	}
];
