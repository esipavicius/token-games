import "./StakeBar.style.scss";

import React from "react";
import StakeBarProgressComponent from "./StakeBarProgress.component";

interface StakeBarGoal {
    name: string;
    image: string;
    scoreFrom: number;
    scoreTo: number;
}

interface StakeBarProgress {
    percentage: number;
    currentScore: number;
    goal: StakeBarGoal;
}

export interface Props {
    currentScore: number;
    goals: StakeBarGoal[];
}

interface State {}

class StakeBar extends React.Component {
    public state: State = {};

    private goals: StakeBarGoal[];

    constructor(props: Props) {
        super(props);

        this.goals = props.goals;
    }

    public render() {
        return (
            <div className="stake-bar">
                {
                    this.goals.map((goal: StakeBarGoal, index: number) => {
                        const { currentScore } = this.props as Props,
                            stakeBarProgressProps: StakeBarProgress = {
                                goal: goal,
                                percentage: this.getPercentage(goal),
                                currentScore: currentScore,
                            };

                        return (
                            <StakeBarProgressComponent
                                key={ "stake-bar-progress" + index }
                                { ...stakeBarProgressProps }
                            />
                        );
                    })
                }
            </div>
        );
    }

    private getPercentage(goal: StakeBarGoal): number {
        const { currentScore } = this.props as Props,
            scoreTo = goal.scoreTo,
            scoreFrom = goal.scoreFrom,
            levelScore = scoreTo - scoreFrom;

        let percentage = 0.0;

        if (currentScore >= scoreTo) {
            percentage = 100.0;
        }

        if (currentScore > scoreFrom && currentScore < scoreTo) {
            const levelCurrentScore = currentScore - scoreFrom;

            percentage = (100 * levelCurrentScore) / levelScore;
        }

        return percentage;
    }
}

export default StakeBar;
