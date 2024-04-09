export const TOKEN_ABI = [
  {
    type: "struct",
    name: "core::integer::u256",
    members: [
      {
        name: "low",
        type: "core::integer::u128",
      },
      {
        name: "high",
        type: "core::integer::u128",
      },
    ],
  },

  {
    type: "function",
    name: "balance_of",
    inputs: [
      {
        name: "address",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
    outputs: [
      {
        type: "core::integer::u256",
      },
    ],
    state_mutability: "view",
  },
  {
    type: "function",
    name: "owner_of",
    inputs: [
      {
        name: "token_id",
        type: "core::integer::u256",
      },
    ],
    outputs: [
      {
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
    state_mutability: "view",
  },
  {
    type: "function",
    name: "max_supply",
    inputs: [],
    outputs: [
      {
        type: "core::felt252",
      },
    ],
    state_mutability: "view",
  },
  {
    type: "function",
    name: "max_supply",
    inputs: [],
    outputs: [
      {
        type: "core::ArrayBuffer",
      },
    ],
    state_mutability: "view",
  },
] as const;
