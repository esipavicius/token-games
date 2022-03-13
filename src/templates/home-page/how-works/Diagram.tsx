import React, { useState } from "react";

const Diagram = () => {
    const tree = [
        {
            header: 'Lorem ipsum dolor sit amet, consectetur',
            fillerText: 'FILLER TEXT INSERTED',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
        },
        {
            header: 'Lorem ipsum dolor sit amet,',
            fillerText: 'FILLER TEXT INSERTED2',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        },
        {
            header: 'Lorem ipsum dolor sit amet, consectetur',
            fillerText: 'FILLER TEXT INSERTED3',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        },
        {
            header: 'Lorem ipsum dolor sit amet,',
            fillerText: 'FILLER TEXT INSERTED4',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
        },
    ];

    const fillerTextWrapperStyle = { display: "flex", justifyContent: "center" },
        fillerTextStyle = { fontSize: "3px", color: "#a296c6", fontWeight: "bold" },
        fillerHeaderWrapperStyle = { display: "flex", textAlign: "left" as "left", cursor: "pointer" },
        fillerHeaderStyle = { fontSize: "5px", color: "#FFF" };

    const info1currentShowStyle = { fillOpacity:"0", stroke:"#ffffff", strokeWidth:"0.4", display: "none" },
        info2currentShowStyle = { fillOpacity:"0", stroke:"#ffffff", strokeWidth:"0.4", display: "none" },
        info3currentShowStyle = { fillOpacity:"0", stroke:"#ffffff", strokeWidth:"0.4", display: "none" },
        info4currentShowStyle = { fillOpacity:"0", stroke:"#ffffff", strokeWidth:"0.4", display: "none" };

    const info1fullShowStyle = { fill:"#ffffff", display: "none" },
        info2fullShowStyle = { fill:"#ffffff", display: "none" },
        info3fullShowStyle = { fill:"#ffffff", display: "none" },
        info4fullShowStyle = { fill:"#ffffff", display: "none" };

    const dialogLeftStyleWrapper = { backgroundColor: "#35278fff", fontSize: "3px", textAlign: "left" as "left", padding: "3px", borderRadius: "1px", marginLeft: "2px" },
        dialogRightStyleWrapper = { backgroundColor: "#35278fff", fontSize: "3px", textAlign: "left" as "left", padding: "3px", borderRadius: "1px", marginRight: "2px" },
        dialog1Style = { display: "none" },
        dialog2Style = { display: "none" },
        dialog3Style = { display: "none" },
        dialog4Style = { display: "none" };

    const arrowLeftStyle = { position: "absolute" as "absolute", top: "5px", width: "0", height: "0", borderTop: "3px solid transparent", borderBottom: "3px solid transparent", borderRight: "3px solid #35278fff"},
        arrowRightStyle = { position: "absolute" as "absolute", top: "5px", right: "0", width: "0", height: "0", borderTop: "3px solid transparent", borderBottom: "3px solid transparent", borderLeft: "3px solid #35278fff"};

    const calculateCurrentLitPercentage = (percentage: number): number => {
        return 208.54101 * (percentage / 100);
    }

    const [currentLinePercentage, setCurrentLinePercentage] = useState(calculateCurrentLitPercentage(0));

    const onMouseHeaderOver = (event: any): any => {
        const headerId = event.currentTarget.dataset.id,
            descriptionDialogId = "dialog" + headerId;

        // @ts-ignore
        document.getElementById(descriptionDialogId).style.display = "block";

        switch (parseInt(headerId)) {
            case 1:
                setCurrentLinePercentage(calculateCurrentLitPercentage(19));

                // @ts-ignore
                document.getElementById("info" + headerId + "current").style.display = "block";
                // @ts-ignore
                document.getElementById("info" + headerId + "full").style.display = "block";

                break;
            case 2:
                setCurrentLinePercentage(calculateCurrentLitPercentage(41));

                // @ts-ignore
                document.getElementById("info" + 1 + "full").style.display = "block";

                // @ts-ignore
                document.getElementById("info" + headerId + "current").style.display = "block";
                // @ts-ignore
                document.getElementById("info" + headerId + "full").style.display = "block";

                break;
            case 3:
                setCurrentLinePercentage(calculateCurrentLitPercentage(61.5));

                // @ts-ignore
                document.getElementById("info" + 1 + "full").style.display = "block";

                // @ts-ignore
                document.getElementById("info" + 2 + "full").style.display = "block";

                // @ts-ignore
                document.getElementById("info" + headerId + "current").style.display = "block";
                // @ts-ignore
                document.getElementById("info" + headerId + "full").style.display = "block";

                break;
            case 4:
                setCurrentLinePercentage(calculateCurrentLitPercentage(82.8));

                // @ts-ignore
                document.getElementById("info" + 1 + "full").style.display = "block";

                // @ts-ignore
                document.getElementById("info" + 2 + "full").style.display = "block";

                // @ts-ignore
                document.getElementById("info" + 3 + "full").style.display = "block";

                // @ts-ignore
                document.getElementById("info" + headerId + "current").style.display = "block";
                // @ts-ignore
                document.getElementById("info" + headerId + "full").style.display = "block";

                break;
        }
    };

    const onMouseHeaderOut = (event: any): any => {
        const headerId = event.currentTarget.dataset.id,
            descriptionDialogId = "dialog" + headerId;

        setCurrentLinePercentage(calculateCurrentLitPercentage(0));

        // @ts-ignore
        document.getElementById(descriptionDialogId).style.display = "none";
        // @ts-ignore
        document.getElementById("info1current").style.display = "none";
        // @ts-ignore
        document.getElementById("info1full").style.display = "none";
        // @ts-ignore
        document.getElementById("info2current").style.display = "none";
        // @ts-ignore
        document.getElementById("info2full").style.display = "none";
        // @ts-ignore
        document.getElementById("info3current").style.display = "none";
        // @ts-ignore
        document.getElementById("info3full").style.display = "none";
        // @ts-ignore
        document.getElementById("info4current").style.display = "none";
        // @ts-ignore
        document.getElementById("info4full").style.display = "none";
    };

    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 208 100" version="1.1" id="svg5">
                <defs id="defs2">
                    <linearGradient id="linearGradient7903">
                        <stop style={{"stopColor":"#422fab","stopOpacity":"1"}} offset="0" id="stop7899"/>
                        <stop style={{"stopColor":"#422fab","stopOpacity":"0"}} offset="1" id="stop7901"/>
                    </linearGradient>
                    <linearGradient id="linearGradient5362">
                        <stop style={{"stopColor":"#b8509b","stopOpacity":"1"}} offset="0" id="stop5358"/>
                        <stop style={{"stopColor":"#b8509b","stopOpacity":"0"}} offset="1" id="stop5360"/>
                    </linearGradient>
                    <linearGradient id="linearGradient4159">
                        <stop style={{"stopColor":"#000000","stopOpacity":"1"}} offset="0" id="stop4155"/>
                        <stop style={{"stopColor":"#000000","stopOpacity":"0"}} offset="1" id="stop4157"/>
                    </linearGradient>
                    <linearGradient xlinkHref="#linearGradient4159" id="linearGradient4161" x1="0.85467201" y1="149.99568" x2="9.068325" y2="149.99568" gradientUnits="userSpaceOnUse"/>
                    <linearGradient xlinkHref="#linearGradient5362" id="linearGradient5364" x1="0.85467201" y1="149.99568" x2="9.068325" y2="149.99568" gradientUnits="userSpaceOnUse"/>
                    <linearGradient xlinkHref="#linearGradient4159" id="linearGradient7055" gradientUnits="userSpaceOnUse" x1="0.85467201" y1="149.99568" x2="9.068325" y2="149.99568" gradientTransform="translate(199.47269)"/>
                    <linearGradient xlinkHref="#linearGradient7903" id="linearGradient7905" x1="200.32736" y1="149.99568" x2="208.54102" y2="149.99568" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-1,0,0,1,408.86837,0)"/>
                </defs>

                <g id="layer1" transform="translate(-0.854672,-102.76335)">
                    <path style={{"fill":"none","fillRule":"evenodd","stroke":"#6754a0","strokeWidth":"0.99187","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="M 0.85467627,149.99568 H 208.54101" id="path294" />

                    <path
                        style={{"fill":"none","fillRule":"evenodd","stroke":"#ffffff","strokeWidth":"2","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}}
                        d={"M 0.85467627,149.99568 H " + currentLinePercentage}
                        id="currentLine"
                    />

                    <path style={{"opacity":"1","fill":"url(#linearGradient4161)","fillOpacity":"1","fillRule":"evenodd","stroke":"url(#linearGradient5364)","strokeWidth":"5","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="M 9.0683254,149.99568 H 0.854672" id="path294-7-9" />
                    <path style={{"fill":"url(#linearGradient7055)","fillOpacity":"1","fillRule":"evenodd","stroke":"url(#linearGradient7905)","strokeWidth":"5","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 208.54101,149.99568 h -8.21365" id="path294-7-9-9" />
                    <g id="info1" transform="translate(-236.82639,67.446792)">
                        <circle style={{"fill":"#ffffff","fillOpacity":"0.993846","fillRule":"evenodd","stroke":"#ffffff","strokeWidth":"0","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"0.886154"}} id="path7955-5" cx="244.37927" cy="47.88345" r="2"/>
                        <g id="g10413" transform="translate(-12.901241,-31.260699)">
                            <circle style={{"fill":"#ffffff","fillOpacity":"0.993846","fillRule":"evenodd","stroke":"#ffffff","strokeWidth":"0","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"0.886154"}} id="path7955-0" cx="287.9" cy="113.65" r="0.5"/>
                            <circle style={{"opacity":"1","fill":"#ffffff","fillOpacity":"0.181538","fillRule":"evenodd","stroke":"#ffffff","strokeWidth":"1","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"0.969231"}} id="path9631" cx="287.81046" cy="113.63763" r="2"/>
                        </g>
                        <path style={{"fill":"none","fillRule":"evenodd","stroke":"#ffffff","strokeWidth":"0.5","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 243.68063,57.648734 c -0.13863,6.111251 0.0247,6.116603 5.7295,6.080859" id="path1171" />
                        <path id="path1929" style={{"fill":"none","fillRule":"evenodd","stroke":"#ffffff","strokeWidth":"0.5","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 249.41013,63.729591 20.27542,0.03231 m 5.22441,16.145178 0.45054,-10.013384 M 243.68063,57.648734 244.13117,47.63535 m 31.22933,22.258345 c 0.19321,-6.109769 0.0299,-6.11658 -5.67495,-6.131794"/>
                    </g>

                    <g id="info2" transform="rotate(180,179.29552,116.16787)">
                        <circle style={{"fill":"#ffffff","fillOpacity":"0.993846","fillRule":"evenodd","stroke":"#ffffff","strokeWidth":"0","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"0.886154"}} id="path7955-5-03-2" cx="244.37927" cy="47.88345" r="2"/>
                        <g id="g10413-5-1" transform="translate(-12.901241,-31.260699)">
                            <circle style={{"fill":"#ffffff","fillOpacity":"0.993846","fillRule":"evenodd","stroke":"#ffffff","strokeWidth":"0","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"0.886154"}} id="path7955-0-84-4" cx="287.75" cy="113.6" r="0.5"/>
                            <circle style={{"opacity":"1","fill":"#ffffff","fillOpacity":"0.181538","fillRule":"evenodd","stroke":"#ffffff","strokeWidth":"1","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"0.969231"}} id="path9631-4-3" cx="287.81046" cy="113.63763" r="2"/>
                        </g>
                        <path style={{"fill":"none","fillRule":"evenodd","stroke":"#ffffff","strokeWidth":"0.5","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 243.68063,57.648734 c -0.13863,6.111251 0.0247,6.116603 5.7295,6.080859" id="path1171-17-7" />
                        <path id="path1929-9-7" style={{"fill":"none","fillRule":"evenodd","stroke":"#ffffff","strokeWidth":"0.5","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 249.41013,63.729591 20.27542,0.03231 m 5.22441,16.145178 0.45054,-10.013384 M 243.68063,57.648734 244.13117,47.63535 m 31.22933,22.258345 c 0.19321,-6.109769 0.0299,-6.11658 -5.67495,-6.131794"/>
                    </g>

                    <g id="info3" transform="translate(-148.22637,67.713098)">
                        <circle style={{"fill":"#ffffff","fillOpacity":"0.993846","fillRule":"evenodd","stroke":"#ffffff","strokeWidth":"0","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"0.886154"}} id="path7955-5-03" cx="244.37927" cy="47.88345" r="2"/>
                        <g id="g10413-5" transform="translate(-12.901241,-31.260699)">
                            <circle style={{"fill":"#ffffff","fillOpacity":"0.993846","fillRule":"evenodd","stroke":"#ffffff","strokeWidth":"0","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"0.886154"}} id="path7955-0-84" cx="287.85" cy="113.65" r="0.5"/>
                            <circle style={{"opacity":"1","fill":"#ffffff","fillOpacity":"0.181538","fillRule":"evenodd","stroke":"#ffffff","strokeWidth":"1","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"0.969231"}} id="path9631-4" cx="287.81046" cy="113.63763" r="2"/>
                        </g>
                        <path style={{"fill":"none","fillRule":"evenodd","stroke":"#ffffff","strokeWidth":"0.5","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 243.68063,57.648734 c -0.13863,6.111251 0.0247,6.116603 5.7295,6.080859" id="path1171-17" />
                        <path id="path1929-9" style={{"fill":"none","fillRule":"evenodd","stroke":"#ffffff","strokeWidth":"0.5","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 249.41013,63.729591 20.27542,0.03231 m 5.22441,16.145178 0.45054,-10.013384 M 243.68063,57.648734 244.13117,47.63535 m 31.22933,22.258345 c 0.19321,-6.109769 0.0299,-6.11658 -5.67495,-6.131794"/>
                    </g>

                    <g id="info4" transform="rotate(180,222.80549,116.36745)">
                        <circle style={{"fill":"#ffffff","fillOpacity":"0.993846","fillRule":"evenodd","stroke":"#ffffff","strokeWidth":"0","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"0.886154"}} id="path7955-5-03-2-3" cx="244.37927" cy="47.88345" r="2"/>
                        <g id="g10413-5-1-7" transform="translate(-12.901241,-31.260699)">
                            <circle style={{"fill":"#ffffff","fillOpacity":"0.993846","fillRule":"evenodd","stroke":"#ffffff","strokeWidth":"0","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"0.886154"}} id="path7955-0-84-4-1" cx="287.85" cy="113.65" r="0.5"/>
                            <circle style={{"opacity":"1","fill":"#ffffff","fillOpacity":"0.181538","fillRule":"evenodd","stroke":"#ffffff","strokeWidth":"1","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"0.969231"}} id="path9631-4-3-4" cx="287.81046" cy="113.63763" r="2"/>
                        </g>
                        <path style={{"fill":"none","fillRule":"evenodd","stroke":"#ffffff","strokeWidth":"0.5","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 243.68063,57.648734 c -0.13863,6.111251 0.0247,6.116603 5.7295,6.080859" id="path1171-17-7-8" />
                        <path id="path1929-9-7-8" style={{"fill":"none","fillRule":"evenodd","stroke":"#ffffff","strokeWidth":"0.5","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}} d="m 249.41013,63.729591 20.27542,0.03231 m 5.22441,16.145178 0.45054,-10.013384 M 243.68063,57.648734 244.13117,47.63535 m 31.22933,22.258345 c 0.19321,-6.109769 0.0299,-6.11658 -5.67495,-6.131794"/>
                    </g>

                    <g id="g10413-8" transform="matrix(5.596104,0,0,4.1989951,-1313.0583,-360.73924)" style={{"fill":"#ffffff","fillOpacity":"0","strokeWidth":"3","strokeMiterlimit":"4","strokeDasharray":"none"}}/>

                    <ellipse
                        style={ info1currentShowStyle }
                        id="info1current"
                        cx="-38.1"
                        cy="-149.8"
                        transform="scale(-1)"
                        rx="4"
                        ry="4"
                    />

                    <ellipse
                        style={ info2currentShowStyle }
                        id="info2current"
                        cx="-83.66"
                        cy="-149.95"
                        transform="scale(-1)"
                        rx="4"
                        ry="4"
                    />

                    <ellipse
                        style={ info3currentShowStyle }
                        id="info3current"
                        cx="-126.7"
                        cy="-150.1"
                        transform="scale(-1)"
                        rx="4"
                        ry="4"
                    />

                    <ellipse
                        style={ info4currentShowStyle }
                        id="info4current"
                        cx="-170.7"
                        cy="-150.3"
                        transform="scale(-1)"
                        rx="4"
                        ry="4"
                    />

                    <circle
                        style={ info1fullShowStyle }
                        id="info1full"
                        cx="38.1"
                        cy="149.8"
                        r="2.5"
                    />

                    <circle
                        style={ info2fullShowStyle }
                        id="info2full"
                        cx="83.7"
                        cy="149.9"
                        r="2.5"
                    />

                    <circle
                        style={ info3fullShowStyle }
                        id="info3full"
                        cx="126.7"
                        cy="150.08942"
                        r="2.5"
                    />

                    <circle
                        style={ info4fullShowStyle }
                        id="info4full"
                        cx="170.7"
                        cy="150.3"
                        r="2.5"
                    />

                    <foreignObject
                        id="info1header"
                        data-id={1}
                        x="11"
                        y="112"
                        width="70"
                        height="20"
                        onMouseOver={ onMouseHeaderOver }
                        onMouseOut={ onMouseHeaderOut }
                    >
                        <div style={ fillerHeaderWrapperStyle }>
                            <span style={ fillerHeaderStyle }>
                                { tree[0].header }
                            </span>
                        </div>
                    </foreignObject>

                    <foreignObject x="14" y="160" id="info1subTitle" width="50" height="5">
                        <div style={ fillerTextWrapperStyle }>
                            <span style={ fillerTextStyle }>
                                { tree[0].fillerText }
                            </span>
                        </div>
                    </foreignObject>

                    <foreignObject
                        id="info2header"
                        data-id={2}
                        x="50"
                        y="172"
                        width="70"
                        height="20"
                        onMouseOver={ onMouseHeaderOver }
                        onMouseOut={ onMouseHeaderOut }
                    >
                        <div style={ fillerHeaderWrapperStyle }>
                            <span style={ fillerHeaderStyle }>
                                { tree[1].header }
                            </span>
                        </div>
                    </foreignObject>

                    <foreignObject x="60" y="138" id="info2subTitle" width="50" height="5">
                        <div style={ fillerTextWrapperStyle }>
                            <span style={ fillerTextStyle }>
                                { tree[1].fillerText }
                            </span>
                        </div>
                    </foreignObject>

                    <foreignObject
                        id="info3header"
                        data-id={3}
                        x="100"
                        y="112"
                        width="70"
                        height="20"
                        onMouseOver={ onMouseHeaderOver }
                        onMouseOut={ onMouseHeaderOut }
                    >
                        <div style={ fillerHeaderWrapperStyle }>
                            <span style={ fillerHeaderStyle }>
                                { tree[2].header }
                            </span>
                        </div>
                    </foreignObject>

                    <foreignObject x="102" y="160" id="info3subTitle" width="50" height="5">
                        <div style={ fillerTextWrapperStyle }>
                            <span style={ fillerTextStyle }>
                                { tree[2].fillerText }
                            </span>
                        </div>
                    </foreignObject>

                    <foreignObject
                        id="info4header"
                        data-id={4}
                        x="138"
                        y="172"
                        width="70"
                        height="20"
                        onMouseOver={ onMouseHeaderOver }
                        onMouseOut={ onMouseHeaderOut }
                    >
                        <div style={ fillerHeaderWrapperStyle }>
                            <span style={ fillerHeaderStyle }>
                                { tree[3].header }
                            </span>
                        </div>
                    </foreignObject>

                    <foreignObject x="146" y="138" id="info4subTitle" width="50" height="5">
                        <div style={ fillerTextWrapperStyle }>
                            <span style={ fillerTextStyle }>
                               { tree[3].fillerText }
                            </span>
                        </div>
                    </foreignObject>

                    <foreignObject
                        id="dialog1"
                        x="80"
                        y="112"
                        width="70"
                        height="50"
                        style={ dialog1Style }
                    >
                        <div style={ dialogLeftStyleWrapper }>
                            <span>{ tree[0].description }</span>
                        </div>

                        <div style={ arrowLeftStyle } />
                    </foreignObject>

                    <foreignObject
                        id="dialog2"
                        x="0"
                        y="170"
                        width="50"
                        height="70"
                        style={ dialog2Style }
                    >
                        <div style={ dialogRightStyleWrapper }>
                            <span>{ tree[1].description }</span>
                        </div>

                        <div style={ arrowRightStyle } />
                    </foreignObject>

                    <foreignObject
                        id="dialog3"
                        x="160"
                        y="112"
                        width="50"
                        height="70"
                        style={ dialog3Style }
                    >
                        <div style={ dialogLeftStyleWrapper }>
                            <span>{ tree[2].description }</span>
                        </div>

                        <div style={ arrowLeftStyle } />
                    </foreignObject>

                    <foreignObject
                        id="dialog4"
                        x="65"
                        y="170"
                        width="70"
                        height="50"
                        style={ dialog4Style }
                    >
                        <div style={ dialogRightStyleWrapper }>
                            <span>{ tree[3].description }</span>
                        </div>

                        <div style={ arrowRightStyle } />
                    </foreignObject>
                </g>
            </svg>
        </div>
    );
}

export default Diagram;
