---
id: conflux_refs
title: References
custom_edit_url: https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/introduction/en/references.md
keywords:
  - conflux
  - references
---

## chainId

* mainnet: 1029
* testnet: 1

## networkId

* mainnet: 1029
* testnet: 1

## CIP37 address prefix

* mainnet: `cfx`
* testnet: `cfxtest`

## CIP37 address type

* user
* contract
* builtin
* null

## Internal contract addresses

### hex address

* AdminControl: 0x0888000000000000000000000000000000000000
* SponsorWhitelistControl: 0x0888000000000000000000000000000000000001
* Staking: 0x0888000000000000000000000000000000000002
* ConfluxContext: 0x0888000000000000000000000000000000000004
* PoSRegister: 0x0888000000000000000000000000000000000005
* CrossSpaceCall: 0x0888000000000000000000000000000000000006

### CIP-37 mainnet address

* AdminControl: cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaaa2mhjju8k
* SponsorWhitelistControl: cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaaegg2r16ar
* Staking: cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaajrwuc9jnb
* ConfluxContext: cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaau5xa6tk73
* PoSRegister: cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaayf993ufd7
* CrossSpaceCall: cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaa2sn102vjv

### CIP-37 testnet address

* AdminControl: cfxtest:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaaawby2s44d
* SponsorWhitelistControl: cfxtest:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaaeprn7v0eh
* Staking: cfxtest:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaajh3dw3ctn
* ConfluxContext: cfxtest:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaauv2xpkd3x
* PoSRegister: cfxtest:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaaytypk0th1
* CrossSpaceCall: cfxtest:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaa2eaeg85p5

## CoreSpace 1820 address

* hex address: 0x88887eD889e776bCBe2f0f9932EcFaBcDfCd1820
* CIP37 mainnet: cfx:aceju902vhx1rtf8f6h3wp1p9m8r9xj2eau7fdwk48
* CIP37 testnet: cfxtest:aceju902vhx1rtf8f6h3wp1p9m8r9xj2ea400xyd8y

## Create2Factory address

* hex: 0x8a3a92281df6497105513b18543fd3b60c778e40
* CIP37 mainnet: cfx:acfdzevjd15ew6jfme7vuzb94s5a276sjaxhcr9602 
* CIP37 testnet: cfxtest:acfdzevjd15ew6jfme7vuzb94s5a276sja3pv730ww

## ZERO address

* hex: 0x0000000000000000000000000000000000000000
* CIP37 mainnet: cfx:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa0sfbnjm2
* CIP37 testnet: cfxtest:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa6f0vrcsw

## Concrete Protocol Implementation

| Parameter                    | Value              |
| ---------------------------- | ------------------ |
| Block time                   | 0.5 s              |
| Maximum block size bound     | 200 KB             |
| Starting coinbase award      | 2 CFX              |
| Starting difficulty (d0)     | 3 × 104 = 30000    |
| Starting block gas limit     | 3 × 107 = 30000000 |
| Anti-cone penalty factor (γ) | 100                |
| Deferred execution           | 5 epochs           |
| Mining reward freezing time  | 12 epochs          |
| Snapshot period              | 100000 epochs      |
