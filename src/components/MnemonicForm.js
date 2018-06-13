import React from 'react'
import { connect } from 'react-redux'
import { mnemonicToSeed } from '../actions/walletActions'

const mapStateToProps = ({wallet}) => {
  return {
    mnemonic: wallet.mnemonic
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleInputChange: (evt) => {
        const val = evt.target.value;
        mnemonicToSeed(val);
    }
  }
}

const MnemonicForm = ({ mnemonic, handleSubmit, handleInputChange, ...rest }) => {
  return (
    <div>
      <textarea
          id="mnemonic"
          rows="7"
          columns="200"
          onChange={handleInputChange}
          placeholder={mnemonic}
          >
      </textarea>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MnemonicForm)
