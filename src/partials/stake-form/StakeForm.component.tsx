import "./StakeForm.style.scss";
import React from "react";

interface Props {}

interface State {
    currency: string;
    amount: number;
}

class StakeForm extends React.Component {
    public state: State = {
        currency: "BTL",
        amount: 100,
    };

    constructor(props: Props) {
        super(props);
    }

    private onClickConnectWallet (event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        alert("Clicked connect wallet");
    }

    public render() {
        return (
            <div className="stake-form">
                <div className="stake-form-header">
                    <div className="stake-form-header-left">
                        <span>Stake</span>
                    </div>

                    <div className="stake-form-header-right">
                        <img data-src="/images/logo.png" className="lazyload" alt="Token games logo"/>
                    </div>
                </div>

                <div className="stake-form-amount">
                    <div className="stake-form-amount-label">
                        <span>Amount</span>
                    </div>

                    <div className="stake-form-amount-form">
                        <input
                            type="number"
                            value={ this.state.amount }
                            onChange={event => this.setState({amount: event.target.value})}
                        />
                        <input
                            type="text"
                            value={ this.state.currency }
                            onChange={event => this.setState({currency: event.target.value})}
                        />
                    </div>
                </div>

                <div className="stake-form-deposit">
                    <div className="stake-form-deposit-left">
                        <span>Deposit Max</span>
                    </div>

                    <div className="stake-form-deposit-right">
                        <span>0.000000 BTL</span>
                    </div>
                </div>

                <div className="stake-form-total">
                    <div className="stake-form-total-left">
                        <span>Total</span>
                    </div>

                    <div className="stake-form-total-right">
                        <span>0.000000 BTL</span>
                    </div>
                </div>

                <div className="stake-form-button">
                    <button onClick={ this.onClickConnectWallet.bind(this) }>CONNECT TO WALLET</button>
                </div>
            </div>
        );
    }
}

export default StakeForm;