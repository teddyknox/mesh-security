use thiserror::Error;

use cosmwasm_std::StdError;
use cw_utils::ParseReplyError;

use mesh_ibc::MeshSecurityError;

#[derive(Error, Debug)]
pub enum ContractError {
    #[error("{0}")]
    Std(#[from] StdError),

    #[error("{0}")]
    Parse(#[from] ParseReplyError),

    #[error("{0}")]
    MeshSecurity(#[from] MeshSecurityError),

    #[error("Unauthorized")]
    Unauthorized,

    #[error("Contract already has a bound channel: {0}")]
    ChannelExists(String),

    #[error("Unauthorized counterparty chain, awaiting connection '{0}'")]
    WrongConnection(String),

    #[error("Refuse to respond on unregistered channel '{0}'")]
    UnknownChannel(String),

    #[error("Invalid reply id: {0}")]
    InvalidReplyId(u64),

    #[error("Insufficient stake to withdraw this")]
    InsufficientStake,

    #[error("Cannot send zero tokens to any methods")]
    ZeroAmount,

    #[error("No tokens are ready to be unbonded")]
    NothingToClaim,

    #[error("Validator was never registered: {0}")]
    UnknownValidator(String),

    #[error("Validator was removed from valset: {0}")]
    RemovedValidator(String),

    #[error("Custom Error val: {val:?}")]
    CustomError { val: String },
    // Add any other custom errors you like here.
    // Look at https://docs.rs/thiserror/1.0.21/thiserror/ for details.
}
