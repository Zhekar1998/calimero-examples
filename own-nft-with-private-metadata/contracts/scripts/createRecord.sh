#!/bin/bash

ACCOUNT_ID=$1
SHARD_ID=$2
OWNER_ID=$3

#  ./scripts/createRecord.sh matej1.hackathon.calimero.testnet hackathon-calimero-testnet matej2.hackathon.calimero.testnet
near call $ACCOUNT_ID create_record '{"token_id":"matej7", "metadata":{"owner_metadata":{"owner_id":"'$OWNER_ID'", "owner_full_name": "matej vuki", "address": "moja adresa", "item_type": "Kuca", "item_size":"100"},"property_metadata":{ "address": "adresa properya", "item_type": "Kuca", "item_size":"100"}},"token_metadata":{"title": "Bazen uz plazu", "description": "Plavo more", "copies": 1} }' --accountId $OWNER_ID --nodeUrl https://api.development.calimero.network/api/v1/shards/$SHARD_ID/neard-rpc --networkId $SHARD_ID --depositYocto 1
