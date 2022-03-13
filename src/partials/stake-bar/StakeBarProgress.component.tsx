import "./StakeBarProgress.style.scss";

import React from "react";
import BarCurrent from "./BarCurrent";
import BarEmpty from "./BarEmpty";

interface BarCurrentProps {
    percentage: number;
}

interface StakeBarGoal {
    name: string;
    image: string;
    scoreFrom: number;
    scoreTo: number;
}

interface Props {
    percentage: number;
    currentScore: number;
    goal: StakeBarGoal;
}

interface State {
    percentage: number;
}

class StakeBarProgress extends React.Component {
    public state: State = {
        percentage: 0,
    };

    private goal: StakeBarGoal;

    constructor(props: Props) {
        super(props);

        this.goal = props.goal;
    }

    public renderBar() {
        const {percentage, currentScore} = this.props as Props,
            barCurrentProps: BarCurrentProps = {
                percentage: percentage,
            };

        if (100 <= percentage) {
            return (
                <>
                    <span>{ this.goal.scoreFrom.toLocaleString() } BTL</span>
                    <BarCurrent { ...barCurrentProps } />
                </>
            );
        }

        if (0 < percentage && 100 > percentage) {
            return (
                <>
                    <span>{ currentScore.toLocaleString() } BTL</span>
                    <BarCurrent { ...barCurrentProps } />
                </>
            );
        }

        if (0 <= percentage) {
            return (
                <>
                    <span>{ this.goal.scoreFrom.toLocaleString() } BTL</span>
                    <BarEmpty />
                </>
            );
        }
    }

    public renderGoalHeader() {
        const { percentage } = this.props as Props;

        return (
            <>
                <span>{ 0 < percentage && 100 > percentage ? "CURRENT" : this.goal.name }</span>
            </>
        );
    }

    public render() {
        return (
            <div className="stake-bar-progress">
                <div className="stake-bar-progress-left">
                    { this.renderGoalHeader() }

                    <img data-src={ process.env.PUBLIC_URL + this.goal.image } className="lazyload" alt="Token games logo"/>
                </div>

                <div className="stake-bar-progress-right">
                    { this.renderBar() }
                </div>
            </div>
        );
    }
}

export default StakeBarProgress;
