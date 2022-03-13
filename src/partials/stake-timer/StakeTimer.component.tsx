import "react-circular-progressbar/dist/styles.css";
import "./StakeTimer.style.scss";

import React from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";

export interface Props {
    timeInSeconds: number;
    timeEndsCallback: Function | null;
}

interface StateTimer {
    days: number;
    hours: number;
    min: number;
    sec: number;
}

interface State extends StateTimer {
    timeInSeconds: number;
}

class StakeTimer extends React.Component {
    public state: State = {
        timeInSeconds: 0,
        days: 0,
        hours: 0,
        min: 0,
        sec: 0,
    };

    private timeEndsCallback: Function | null;
    private timeInterval: NodeJS.Timer | undefined;
    private initTimeInSeconds: number;

    constructor(props: Props) {
        super(props);

        this.initTimeInSeconds = props.timeInSeconds;
        this.timeEndsCallback = props.timeEndsCallback;

        this.state = {
            timeInSeconds: props.timeInSeconds,
            ...this.calculateTimeState(props.timeInSeconds),
        };
    }

    componentDidMount() {
        this.timeInterval = setInterval(
            () => {
                if (0 > this.state.timeInSeconds && this.timeInterval) {
                    clearInterval(this.timeInterval);

                    this.timeEnds();

                    return;
                }

                this.setState({
                    ...this.state,
                    ...this.calculateTimeState(this.state.timeInSeconds),
                    timeInSeconds: this.state.timeInSeconds - 1,
                });
            },
            1000
        );
    }

    componentWillUnmount() {
        if (this.timeInterval) {
            clearInterval(this.timeInterval);
        }
    }

    timeEnds() {
        if (this.timeEndsCallback) {
            this.timeEndsCallback();
        }
    }

    calculateTimeState(delta: number): StateTimer {
        let days = Math.floor(delta / 86400);
        delta -= days * 86400;

        let hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        let minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;

        let seconds = delta % 60;

        return {
            days: days,
            hours: hours,
            min: minutes,
            sec: seconds,
        };
    }

    calculatePercentage(current: number, total: number) {
        return 100 - (100 * current) / total;
    }

    public render() {
        const percentage = this.calculatePercentage(this.state.timeInSeconds, this.initTimeInSeconds);

        return (
            <div className="stake-timer">
                <div className="stake-timer-circle">
                    <CircularProgressbarWithChildren
                        value={percentage}
                        strokeWidth={3}
                        styles={buildStyles({
                            rotation: 0,
                            strokeLinecap: 'round',
                            pathTransitionDuration: 0.5,
                        })}
                    >
                        <div className="stake-timer-circle-inner">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stake-timer-circle-inner-wave" viewBox="0 0 1000 800">
                                <path xmlns="http://www.w3.org/2000/svg" d="M0 465L25 462.8C50 460.7 100 456.3 150 464.3C200 472.3 250 492.7 300 493C350 493.3 400 473.7 450 454.8C500 436 550 418 600 415.8C650 413.7 700 427.3 750 429.5C800 431.7 850 422.3 875 417.7L900 413L900 601L875 601C850 601 800 601 750 601C700 601 650 601 600 601C550 601 500 601 450 601C400 601 350 601 300 601C250 601 200 601 150 601C100 601 50 601 25 601L0 601Z"/>
                            </svg>

                            <svg className="stake-timer-circle-inner-dots" viewBox="0 0 120 120">
                                <circle cx="60" cy="60" r="50" className="dotted"/>
                            </svg>

                            <div className="stake-timer-circle-inner-wrapper">
                                <span className="time-header">TIME LEFT TO STAKE</span>

                                <div className="stake-timer-circle-inner-wrapper-time">
                                    <div>
                                        <span className="time-text">{ ("0" + this.state.days).slice(-2) }</span>
                                        <span className="time2-text">DAYS</span>
                                    </div>

                                    <div>
                                        <span className="time-text">:</span>
                                    </div>

                                    <div>
                                        <span className="time-text">{ ("0" + this.state.hours).slice(-2) }</span>
                                        <span className="time2-text">HOURS</span>
                                    </div>

                                    <div>
                                        <span className="time-text">:</span>
                                    </div>

                                    <div>
                                        <span className="time-text">{ ("0" + this.state.min).slice(-2) }</span>
                                        <span className="time2-text">MIN</span>
                                    </div>

                                    <div>
                                        <span className="time-text">:</span>
                                    </div>

                                    <div>
                                        <span className="time-text">{ ("0" + this.state.sec).slice(-2) }</span>
                                        <span className="time2-text">SEC</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>

                <div className="stake-timer-wave" />
                <div className="stake-timer-wave-two" />
            </div>
        );
    }
}

export default StakeTimer;
