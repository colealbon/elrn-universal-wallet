import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({wallet}) => {
  return {
    seed : wallet.seed
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

const WalletSeed = ({ seed , ...rest }) => {
  return (
    <div>
    hex seed: {seed.toString('hex')}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(WalletSeed)
