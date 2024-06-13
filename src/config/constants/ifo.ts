import { Token, ChainId } from '@orbitalswap/sdk'
import tokens from './tokens'
import farms from './farms'
import { Ifo } from './types'
import BigNumber from 'bignumber.js'

export const cakeBnbLpToken = new Token(ChainId.MAINNET, farms[1].lpAddresses[ChainId.MAINNET], 18, farms[1].lpSymbol)

const ifos: Ifo[] = [
  {
    id: 'duet',
    address: '0xDF24BE326af4c1fb888f567f41D9a981A4752cf1',
    isActive: false,
    name: 'DUET',
    poolBasic: {
      saleAmount: '1,200,000 DUET',
      raiseAmount: '$360,000',
      cakeToBurn: '$0',
      distributionRatio: 0.2,
    },
    poolUnlimited: {
      saleAmount: '4,800,000 DUET',
      raiseAmount: '$1,440,000',
      cakeToBurn: '$0',
      distributionRatio: 0.8,
    },
    currency: tokens.cake,
    token: tokens.duet,
    releaseBlockNumber: null,
    campaignId: '511190000',
    articleUrl: 'https://pancakeswap.finance/voting/proposal/QmXwoYYd8rkahVbxiGKsTa4rYRRFWPxhRGAHy3hVwK3Q2z',
    tokenOfferingPrice: 0.3,
    version: 3.1,
    telegramUrl: 'https://t.me/duetprotocol',
    twitterUrl: 'https://twitter.com/duetprotocol',
    description:
      'DUET Protocol is a multi-chain synthetic assets ecosystem, enabling pegged assets from various markets – from individual stocks, to indexes, ETFs, and commodities.',
  },
  {
    id: 'era',
    address: '0x527201a43f8da24ce9b7c21744a0706942f41fa3',
    isActive: false,
    name: 'ERA (Game of Truth)',
    poolBasic: {
      saleAmount: '4,000,000 ERA',
      raiseAmount: '$360,000',
      cakeToBurn: '$0',
      distributionRatio: 0.2,
    },
    poolUnlimited: {
      saleAmount: '16,000,000 ERA',
      raiseAmount: '$1,440,000',
      cakeToBurn: '$0',
      distributionRatio: 0.8,
    },
    currency: tokens.cake,
    token: tokens.era,
    releaseBlockNumber: 15156634,
    campaignId: '511180000',
    articleUrl: 'https://pancakeswap.finance/voting/proposal/QmTfN1SKnFidF6XCDcpga7zAf69mFfhb26Zy9b85dYskxW',
    tokenOfferingPrice: 0.09,
    version: 3.1,
    telegramUrl: 'https://t.me/Era7_Official',
    twitterUrl: 'https://twitter.com/Era7_official',
    description:
      'Drawing from their experience in traditional games such as Awakening of Dragon, Era7: Game of Truth combines elements of DeFi, NFTs, and Trading Cards into a play-to-earn game steeped in mythology and magic.',
  },
  {
    id: 'froyo',
    address: '0xE0d6c91860a332068bdB59275b0AAC8769e26Ac4',
    isActive: false,
    name: 'Froyo Games (FROYO)',
    poolBasic: {
      saleAmount: '20,000,000 FROYO',
      raiseAmount: '$1,200,000',
      cakeToBurn: '$0',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '46,666,668 FROYO',
      raiseAmount: '$2,800,000',
      cakeToBurn: '$0',
      distributionRatio: 0.7,
    },
    currency: tokens.cake,
    token: tokens.froyo,
    releaseBlockNumber: 14297000,
    campaignId: '511170000',
    articleUrl: 'https://pancakeswap.finance/voting/proposal/QmRhc4oC73jk4zxU4YkP1kudKHeq6qamgYA1sWoh6XJnks',
    tokenOfferingPrice: 0.06,
    version: 3,
    telegramUrl: 'https://t.me/froyogames',
    twitterUrl: 'https://twitter.com/realfroyogames',
    description: `Froyo Games is a game publisher and decentralized GameFi platform, with a NFT Marketplace that integrates NFTs with their games.\n \n FROYO tokens can be used to buy NFTs and participate in Froyo games`,
  },
  {
    id: 'dpt',
    address: '0x63914805A0864e9557eA3A5cC86cc1BA054ec64b',
    isActive: false,
    name: 'Diviner Protocol (DPT)',
    poolBasic: {
      saleAmount: '7,200,000 DPT',
      raiseAmount: '$180,000',
      cakeToBurn: '$0',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '16,800,000 DPT',
      raiseAmount: '$420,000',
      cakeToBurn: '$0',
      distributionRatio: 0.7,
    },
    currency: tokens.cake,
    token: tokens.dpt,
    releaseBlockNumber: 13491500,
    campaignId: '511160000',
    articleUrl: 'https://pancakeswap.finance/voting/proposal/QmQqpknHvuQwshVP259qFxfQsxiWbQ9SLMebohDeRwRzKg',
    tokenOfferingPrice: 0.025,
    version: 3,
  },
  {
    id: 'santos',
    address: '0x69B5D2Ab0cf532a0E22Fc0dEB0c5135639892468',
    isActive: false,
    name: 'FC Santos Fan Token (SANTOS)',
    poolBasic: {
      saleAmount: '120,000 SANTOS',
      raiseAmount: '$300,000',
      cakeToBurn: '$0',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '280,000 SANTOS',
      raiseAmount: '$700,000',
      cakeToBurn: '$0',
      distributionRatio: 0.7,
    },
    currency: tokens.cake,
    token: tokens.santos,
    releaseBlockNumber: 13097777,
    campaignId: '511150000',
    articleUrl: 'https://pancakeswap.finance/voting/proposal/QmUqRxjwZCWeZWEdgV2vHJ6hex7jMW7i247NKFas73xc8j',
    tokenOfferingPrice: 2.5,
    version: 2,
  },
  {
    id: 'porto',
    address: '0xFDFf29dD0b4DD49Bf5E991A30b8593eaA34B4580',
    isActive: false,
    name: 'FC Porto Fan Token (PORTO)',
    poolBasic: {
      saleAmount: '250,000 PORTO',
      raiseAmount: '$500,000',
      cakeToBurn: '$0',
      distributionRatio: 0.5,
    },
    poolUnlimited: {
      saleAmount: '250,000 PORTO',
      raiseAmount: '$500,000',
      cakeToBurn: '$0',
      distributionRatio: 0.5,
    },
    currency: tokens.cake,
    token: tokens.porto,
    releaseBlockNumber: 12687500,
    campaignId: '511140000',
    articleUrl: 'https://pancakeswap.finance/voting/proposal/QmaakXYpydAwCgTuSPe3R2ZNraRtkCbK6iBRqBCCdzqKEG',
    tokenOfferingPrice: 2,
    version: 2,
  }
]

export default ifos