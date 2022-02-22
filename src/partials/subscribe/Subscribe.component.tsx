import "./Subscribe.style.scss";

import React from "react";
import {toast} from "react-toastify";
import SubmitSubscribeActionService from "./action/SubmitSubscribeAction";

interface Props {}

interface State {
    loaded: boolean;
    email: string;
}

const SubmitSubscribeAction = new SubmitSubscribeActionService();

class Subscribe extends React.Component {
    private header: string = "Subscribe To Our Newsletter";

    public state: State = {
        loaded: true,
        email: "",
    }

    constructor(props: Props) {
        super(props);
    }

    private onClickSubscribe (event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        if (this.state.loaded) {
            this.setState({ loaded: false }, async (): Promise<void> => {
                try {
                    const response: Object = await SubmitSubscribeAction.submit(this.state.email);

                    // TODO: only for testing. Remove in production!
                    console.log(response);

                    this.setState({email: ""}, () => {
                        toast.success("Newsletter successfully subscribed.");
                    })
                } catch (error: any) {
                    toast.error(error.message);
                }

                this.setState({ loaded: true });
            });
        }
    }

    public render() {
        return (
            <div className="subscribe">
                <h1 className="subscribe-header">{ this.header }</h1>

                <div className="subscribe-form">
                    <input
                        type="text"
                        value={ this.state.email }
                        onChange={event => this.setState({email: event.target.value})}
                    />

                    <button onClick={ this.onClickSubscribe.bind(this) }>SUBSCRIBE</button>
                </div>
            </div>
        );
    }
}

export default Subscribe;