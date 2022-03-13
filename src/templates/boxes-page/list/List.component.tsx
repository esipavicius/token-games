import "./List.style.scss";

import React from "react";
import BoxLIstBlock, { KEY_TYPE, Props as ListBlockProps } from "../../../partials/box-list-block/BoxListBlock.component";

const List = () => {
    const listBlocks: ListBlockProps[] = [
        {
            title: "Box A",
            subTitle: "SILVER KEY BOXES A",
            boxAvailable: {
                total: 1000,
                used: 300,
            },
            boxValue: {
                value: 2,
                currency: 'BTL',
            },
            boxesValue: {
                value: 722,
                currency: '$',
            },
            keysToUnlock: 1,
            keysType: KEY_TYPE.SILVER,
            image: "/images/chest.png",
            unlockCallback: () => {
                alert('Unlocked Box A!');
            }
        },
        {
            title: "Box B",
            subTitle: "SILVER KEY BOXES B",
            boxAvailable: {
                total: 100,
                used: 0,
            },
            boxValue: {
                value: 16,
                currency: 'BTL',
            },
            boxesValue: {
                value: 807,
                currency: '$',
            },
            keysToUnlock: 10,
            keysType: KEY_TYPE.SILVER,
            image: "/images/chest.png",
            unlockCallback: () => {
                alert('Unlocked Box B!');
            }
        },
        {
            title: "Box C",
            subTitle: "GOLDEN KEY BOXES C",
            boxAvailable: {
                total: 50,
                used: 0,
            },
            boxValue: {
                value: 100,
                currency: 'BTL',
            },
            boxesValue: {
                value: 1487,
                currency: '$',
            },
            keysToUnlock: 1,
            keysType: KEY_TYPE.GOLD,
            image: "/images/chest.png",
            unlockCallback: () => {
                alert('Unlocked Box C!');
            }
        },
        {
            title: "Box D",
            subTitle: "GOLDEN KEY BOXES D",
            boxAvailable: {
                total: 5,
                used: 1,
            },
            boxValue: {
                value: 1000,
                currency: 'BTL',
            },
            boxesValue: {
                value: 2975,
                currency: '$',
            },
            keysToUnlock: 5,
            keysType: KEY_TYPE.GOLD,
            image: "/images/chest.png",
            unlockCallback: () => {
                alert('Unlocked!');
            }
        },
    ];

    return (
        <div className="boxes-list">
            <div className="boxes-list-wrapper">
                {
                    listBlocks.map((listBlock: ListBlockProps, index: number) => {
                        return (
                            <div
                                key={ `explain-list-${index}` }
                                className="boxes-list-wrapper-container"
                            >
                                <BoxLIstBlock {...listBlock} />
                            </div>
                        );
                    })
                }
            </div>

            <div className="boxes-list-table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>BOXES</th>
                            <th>KEYS TO UNLOCK</th>
                            <th>BOXES COUNT</th>
                            <th>VALUE/BOX</th>
                            <th>BOXES VALUE $</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        listBlocks.map((listBlock: ListBlockProps) => {
                            return (
                                <tr>
                                    <td>{ listBlock.subTitle }</td>
                                    <td>{ listBlock.keysToUnlock }</td>
                                    <td>{ listBlock.boxAvailable.total }</td>
                                    <td>{ listBlock.boxValue.value } { listBlock.boxValue.currency }</td>
                                    <td>{ listBlock.boxesValue.value }</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default List;