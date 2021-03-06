import React from 'react'
import { connect } from 'react-redux'
import Mnemonic from './Mnemonic'
import MnemonicForm from './MnemonicForm'
import GenerateWalletSeedButton from './GenerateWalletSeedButton'

const mapStateToProps = ({wallet}) => {
  return {
    mnemonic: wallet.mnemonic
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

const SecretPhrase = ({...rest}) => {
  return (
    <div>
    <br></br>
    <Mnemonic></Mnemonic>
    <br></br>
    pass phrase:
    <br></br>
    <MnemonicForm></MnemonicForm>
    <br></br>
    <GenerateWalletSeedButton></GenerateWalletSeedButton>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SecretPhrase)
