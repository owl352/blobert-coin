export const ABI = [
  {
    type: "function",
    name: "get_status",
    inputs: [
      {
        name: "token_id",
        type: "core::array::Array::<core::integer::u256>",
      },
    ],
    outputs: [
      {
        type: "core::array::Array::<core::integer::u256>",
      },
    ],
    state_mutability: "view",
  },
  {
    type: "function",
    name: "exchange_tokens",
    inputs: [
      {
        name: "token_id",
        type: "core::integer::u256",
      },
    ],
    outputs: [],
    state_mutability: "external",
  },
  {
    type: "function",
    name: "get_token_owner",
    inputs: [],
    outputs: [
      {
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
    state_mutability: "view",
  },
  {
    type: "function",
    name: "balance_of",
    inputs: [
      {
        name: "account",
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
] as const;
