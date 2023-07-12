import { ITechStatus } from '../interfaces';

interface IProps {
	techStatuses: ITechStatus[];
}

function RoadmapSvg({ techStatuses }: IProps) {
	const htmlStatus = techStatuses.find((m) => m.id === 'html-box');
	const reactStatus = techStatuses.find((m) => m.id === 'react-box');

	return (
		<>
			{techStatuses.length > 0 && (
				<svg
					width="700"
					viewBox="0 0 406 963"
					xmlns="http://www.w3.org/2000/svg"
					fillRule="evenodd"
					clipRule="evenodd"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeMiterlimit={1.5}
				>
					<path
						id="ArtBoard1"
						fill="none"
						d="M0 0H405.911V962.176H0z"
					/>
					<path
						d="M202.137 356.696c5.798 27.681 17.152 59.131 17.392 83.044.239 23.751-11.456 59.664-17.392 83.916-5.906 24.13-16.82 58.803-16.925 83.099-.104 23.86 11.283 55.584 16.925 83.376"
						fill="none"
						stroke="#fff"
						strokeWidth="3.33px"
					/>
					<path
						d="M202.137 23.363c5.798 27.681 17.152 59.131 17.392 83.043.239 23.752-11.456 59.664-17.392 83.917-5.906 24.129-16.82 58.803-16.925 83.099-.104 23.859 11.283 55.584 16.925 83.376"
						fill="none"
						stroke="#fff"
						strokeWidth="3.33px"
					/>
					<path
						d="M261.813 105.862h49.912"
						fill="none"
						stroke="#fff"
						strokeWidth="3.33px"
						strokeDasharray=".33,6.67,0,0"
					/>
					<path
						d="M191.799 231.603h86.096"
						fill="none"
						stroke="#fff"
						strokeWidth="3.33px"
						strokeDasharray=".33,6.67,0,0"
						strokeDashoffset={5.33}
					/>
					<path
						d="M95.603 272.524h49.912"
						fill="none"
						stroke="#fff"
						strokeWidth="3.33px"
						strokeLinejoin="miter"
						strokeDasharray=".33,6.67,0,0"
					/>
					<path
						d="M111.782 339.289s10.702 1.667 15.762 3.56c5.239 1.96 10.838 8.439 16.415 10.338 5.68 1.935 17.517 3.855 17.517 3.855M244.671 349.513c5.985-2.535 14.443-5.868 18.877-9.178 4.45-3.322 8.517-11.94 12.737-15.523 4.202-3.567 11.789-7.389 18.437-10.372"
						fill="none"
						stroke="#fff"
						strokeWidth="3.33px"
						strokeDasharray=".33,6.67,0,0"
					/>
					<path
						d="M294.674 314.725c-6.311-2.767-16.505-8.201-21.015-11.408-4.914-3.496-16.378-15.349-21.89-18.497-5.405-3.086-15.785-5.576-23.501-8.049"
						fill="none"
						stroke="#fff"
						strokeWidth="3.33px"
						strokeDasharray=".33,6.67,0,0"
					/>
					<path
						d="M128.231 397.872h84.614"
						fill="none"
						stroke="#fff"
						strokeWidth="3.33px"
						strokeDasharray=".33,6.67,0,0"
						strokeDashoffset={4}
					/>
					<path
						d="M212.302 397.533c7.282 0 30.947 4.409 50.072 9.836 7.217 2.048 13.927 5.682 19.78 7.68 9.711 3.314 16.658 4.568 16.658 4.568"
						fill="none"
						stroke="#fff"
						strokeWidth="3.33px"
						strokeDasharray=".33,6.67,0,0"
					/>
					<path
						d="M212.5 398.5c7.261 0 31.474-4.469 50.611-9.868 6.9-1.947 13.456-5.859 19.033-7.813 10.035-3.516 16.9-4.646 16.9-4.646"
						fill="none"
						stroke="#fff"
						strokeWidth="3.33px"
						strokeDasharray=".33,6.67,0,0"
					/>
					<path
						d="M228.091 606.603s18.468-1.834 27.058-3.168c8.176-1.269 24.437-5.137 24.437-5.137"
						fill="none"
						stroke="#fff"
						strokeWidth="3.33px"
						strokeDasharray=".33,6.67,0,0"
						strokeDashoffset={5.33}
					/>
					<path
						d="M190.772 643.541s35.259 3.982 42.598 4.985c7.364 1.006 44.657 4.864 44.657 4.864"
						fill="none"
						stroke="#fff"
						strokeWidth="3.33px"
						strokeDasharray=".33,6.67,0,0"
						strokeDashoffset={4}
					/>
					<path
						d="M244.758 523.27h51.248"
						fill="none"
						stroke="#fff"
						strokeWidth="3.33px"
						strokeDasharray=".33,6.67,0,0"
						strokeDashoffset={5.33}
					/>
					<path
						d="M202.137 690.029c5.798 27.682 17.152 59.131 17.392 83.044.239 23.751-11.456 59.664-17.392 83.916-5.906 24.13-16.82 58.804-16.925 83.099"
						fill="none"
						stroke="#fff"
						strokeWidth="3.33px"
					/>
					<path
						d="M95.603 605.857h49.113"
						fill="none"
						stroke="#fff"
						strokeWidth="3.33px"
						strokeLinejoin="miter"
						strokeDasharray=".33,6.67,0,0"
					/>
					<path
						d="M244.758 856.603h51.248"
						fill="none"
						stroke="#fff"
						strokeWidth="3.33px"
						strokeDasharray=".33,6.67,0,0"
						strokeDashoffset={5.33}
					/>
					<path
						d="M112.27 689.19h49.113"
						fill="none"
						stroke="#fff"
						strokeWidth="3.33px"
						strokeLinejoin="miter"
						strokeDasharray=".33,6.67,0,0"
					/>
					<path
						d="M244.77 691.858c7.282 0 16.76 6.451 22.682 8.234 6.227 1.874 23.12 4.098 23.12 4.098"
						fill="none"
						stroke="#fff"
						strokeWidth="3.33px"
						strokeDasharray=".33,6.67,0,0"
						strokeDashoffset={3.33}
					/>
					<path
						d="M128.936 772.524h49.113"
						fill="none"
						stroke="#fff"
						strokeWidth="3.33px"
						strokeLinejoin="miter"
						strokeDasharray=".33,6.67,0,0"
					/>
					<path
						id="devops-box"
						fill="#fff"
						stroke="#000"
						strokeWidth=".83px"
						d="M144.832 927.06H228.165V952.06H144.832z"
					/>
					<text
						x="170.089px"
						y="942.9px"
						fontFamily="'ArialMT','Arial',sans-serif"
						fontSize="8.989px"
						transform="matrix(1 0 0 .99928 0 .636)"
						id="devops-text"
					>
						{'DevOps'}
					</text>

					<path
						id="desktop-apps-box"
						fill="#fff"
						stroke="#000"
						strokeWidth=".83px"
						d="M161.499 843.726H244.832V868.726H161.499z"
					/>
					<text
						x="175.258px"
						y="858.543px"
						fontFamily="'ArialMT','Arial',sans-serif"
						fontSize="8.989px"
						transform="matrix(1 0 0 .99928 0 .575)"
						id="dekstop-apps-text"
					>
						{'Desktop '}
						<tspan x="210.237px 216.233px" y="858.543px 858.543px">
							{'Ap'}
						</tspan>
						{'ps'}
					</text>

					<path
						id="mobile-apps-box"
						fill="#fff"
						stroke="#000"
						strokeWidth=".83px"
						d="M178.166 760.393H261.499V785.393H178.166z"
					/>
					<text
						x="195.186px"
						y="775.262px"
						fontFamily="'ArialMT','Arial',sans-serif"
						fontSize="8.989px"
						transform="matrix(1 0 0 .99928 0 .515)"
						id="mobile-apps-text"
					>
						{'Mobile '}
						<tspan x="223.668px 229.664px" y="775.262px 775.262px">
							{'Ap'}
						</tspan>
						{'ps'}
					</text>
					<path
						id="api-box"
						fill="#fff"
						stroke="#000"
						strokeWidth=".83px"
						d="M161.499 677.06H244.832V702.06H161.499z"
					/>
					<text
						x="196.331px"
						y="692.9px"
						fontFamily="'ArialMT','Arial',sans-serif"
						fontSize="8.989px"
						transform="matrix(1 0 0 .99928 0 .455)"
						id="api-text"
					>
						{'API'}
					</text>
					<path
						id="databases-box"
						fill="#fff"
						stroke="#000"
						strokeWidth=".83px"
						d="M144.832 593.726H228.165V618.726H144.832z"
					/>
					<text
						x="164.838px"
						y="609.566px"
						fontFamily="'ArialMT','Arial',sans-serif"
						fontSize="8.989px"
						transform="matrix(1 0 0 .99928 0 .395)"
						id="databases-text"
					>
						{'Databases'}
					</text>
					<path
						id="nodejs-box"
						fill="#fff"
						stroke="#000"
						strokeWidth=".83px"
						d="M161.499 510.393H244.832V535.393H161.499z"
					/>
					<text
						x="189.006px"
						y="525.21px"
						fontFamily="'ArialMT','Arial',sans-serif"
						fontSize="8.989px"
						transform="matrix(1 0 0 .99928 0 .334)"
						id="nodejs-text"
					>
						{'Nodejs'}
					</text>
					<path
						id="ssr-box"
						fill="#fff"
						stroke="#000"
						strokeWidth=".83px"
						d="M178.166 427.06H261.499V452.06H178.166z"
					/>
					<text
						x="210.446px"
						y="442.9px"
						fontFamily="'ArialMT','Arial',sans-serif"
						fontSize="8.989px"
						transform="matrix(1 0 0 .99928 0 .274)"
						id="ssr-text"
					>
						{'SSR'}
					</text>
					<path
						id="tailwind-box"
						fill="#fff"
						stroke="#000"
						strokeWidth=".83px"
						d="M161.499 343.726H244.832V368.726H161.499z"
					/>
					<text
						x="187.397px"
						y="359.566px"
						fontFamily="'ArialMT','Arial',sans-serif"
						fontSize="8.989px"
						transform="matrix(1 0 0 .99928 0 .214)"
						id="tailwind-text"
					>
						{'T'}
						<tspan x="191.892px 196.891px" y="359.566px 359.566px">
							{'ai'}
						</tspan>
						{'lwind'}
					</text>
					<path
						id="react-box"
							fill={reactStatus.status}
						stroke="#000"
						strokeWidth=".83px"
						d="M144.832 260.393H228.165V285.393H144.832z"
					/>
					<text
						x="174.064px"
						y="276.233px"
						fontFamily="'ArialMT','Arial',sans-serif"
						fontSize="8.989px"
						transform="matrix(1 0 0 .99928 0 .153)"
						id="react-text"
					>
						{'React'}
					</text>
					<path
						id="http-box"
						fill="#fff"
						stroke="#000"
						strokeWidth=".83px"
						d="M278.166 218.726H361.499V243.726H278.166z"
					/>
					<text
						x="307.397px"
						y="234.566px"
						fontFamily="'ArialMT','Arial',sans-serif"
						fontSize="8.989px"
						transform="matrix(1 0 0 .99928 0 .123)"
						id="http-text"
					>
						{'HTTP'}
					</text>
					<path
						id="express-box"
						fill="#fff"
						stroke="#000"
						strokeWidth=".83px"
						d="M296.082 510.393H379.41499999999996V535.393H296.082z"
					/>
					<text
						x="317.871px"
						y="526.233px"
						fontFamily="'ArialMT','Arial',sans-serif"
						fontSize="8.989px"
						transform="matrix(1 0 0 .99928 0 .334)"
						id="express-text"
					>
						{'Expressjs'}
					</text>
					<path
						id="electron-box"
						fill="#fff"
						stroke="#000"
						strokeWidth=".83px"
						d="M296.082 843.726H379.41499999999996V868.726H296.082z"
					/>
					<text
						x="321.204px"
						y="859.566px"
						fontFamily="'ArialMT','Arial',sans-serif"
						fontSize="8.989px"
						transform="matrix(1 0 0 .99928 0 .576)"
						id="electron-text"
					>
						{'Electron'}
					</text>
					<path
						id="mongodb-box"
						fill="#fff"
						stroke="#000"
						strokeWidth=".83px"
						d="M279.416 585.393H362.749V610.393H279.416z"
					/>
					<text
						x="301.204px"
						y="600.203px"
						fontFamily="'ArialMT','Arial',sans-serif"
						fontSize="8.989px"
						transform="matrix(1 0 0 .99928 0 .388)"
						id="mongodb-text"
					>
						{'MongoDB'}
					</text>
					<path
						id="web-apps-box"
						fill="#fff"
						stroke="#000"
						strokeWidth=".83px"
						d="M298.999 406.226H382.332V431.226H298.999z"
					/>
					<g
						id="web-apps-text"
						fontFamily="'ArialMT','Arial',sans-serif"
						fontSize="12px"
					>
						<text
							x="379.585px"
							y="85.831px"
							transform="matrix(.74911 0 0 .74857 32.703 352.324)"
						>
							{'Progressive'}
						</text>
						<text
							x="384.024px"
							y="98.223px"
							transform="matrix(.74911 0 0 .74857 32.703 352.324)"
						>
							{'W'}
							<tspan
								x="395.133px 401.807px 408.481px 411.153px 419.157px"
								y="98.223px 98.223px 98.223px 98.223px 98.223px"
							>
								{'eb Ap'}
							</tspan>
							{'ps'}
						</text>
					</g>
					<g>
						<path
							id="rest-box"
							fill="#fff"
							stroke="#000"
							strokeWidth=".83px"
							d="M290.666 693.726H373.999V718.726H290.666z"
						/>
						<text
							x="320.466px"
							y="709.479px"
							fontFamily="'ArialMT','Arial',sans-serif"
							fontSize="8.989px"
							transform="matrix(1 0 0 .99928 0 .467)"
							id="rest-text"
						>
							{'REST'}
						</text>
					</g>
					<g>
						<path
							id="web-apps-box1"
							fill="#fff"
							stroke="#000"
							strokeWidth=".83px"
							d="M278.166 639.56H361.499V664.56H278.166z"
						/>
						<text
							x="307.459px"
							y="655.313px"
							fontFamily="'ArialMT','Arial',sans-serif"
							fontSize="8.989px"
							transform="matrix(1 0 0 .99928 0 .428)"
							id="web-apps-text1"
						>
							{'UI/UX'}
						</text>
					</g>
					<g>
						<path
							id="web-components-box"
							fill="#fff"
							stroke="#000"
							strokeWidth=".83px"
							d="M298.999 364.56H382.332V389.56H298.999z"
						/>
						<text
							x="304.722px"
							y="380.4px"
							fontFamily="'ArialMT','Arial',sans-serif"
							fontSize="8.989px"
							transform="matrix(1 0 0 .99928 0 .229)"
							id="web-components-text"
						>
							{'W'}
							<tspan x="313.045px 318.044px" y="380.4px 380.4px">
								{'eb'}
							</tspan>
							{' Components'}
						</text>
					</g>
					<g>
						<path
							id="js-box"
							fill="#fff"
							stroke="#000"
							strokeWidth=".83px"
							d="M161.499 177.06H244.832V202.06H161.499z"
						/>
						<text
							x="190.824px"
							y="192.794px"
							fontFamily="'ArialMT','Arial',sans-serif"
							fontSize="8.989px"
							transform="matrix(1 0 0 .99928 0 .093)"
							id="js-text"
						>
							{'JS/TS'}
						</text>
					</g>
					<g>
						<path
							id="css-box"
							fill="#fff"
							stroke="#000"
							strokeWidth=".83px"
							d="M178.166 93.726H261.499V118.726H178.166z"
						/>
						<text
							x="210.601px"
							y="109.523px"
							fontFamily="'ArialMT','Arial',sans-serif"
							fontSize="8.989px"
							transform="matrix(1 0 0 .99928 0 .033)"
							id="css-text"
						>
							{'CSS'}
						</text>
					</g>
					<g>
						<path
							id="sass-box"
							fill="#fff"
							stroke="#000"
							strokeWidth=".83px"
							d="M311.499 93.726H394.832V118.726H311.499z"
						/>
						<g
							id="sass-text"
							fontFamily="'ArialMT','Arial',sans-serif"
							fontSize="12px"
						>
							<text
								x="387.92px"
								y="85.831px"
								transform="matrix(.74911 0 0 .74857 51.451 40.45)"
							>
								{'SASS'}
							</text>
							<text
								x="379.585px"
								y="98.223px"
								transform="matrix(.74911 0 0 .74857 51.451 40.45)"
							>
								{'PostCSS'}
							</text>
						</g>
					</g>
					<g>
						<path
							id="vue-box"
							fill="#fff"
							stroke="#000"
							strokeWidth=".83px"
							d="M11.499 260.393H94.832V285.393H11.499z"
						/>
						<g
							id="vue-text"
							fontFamily="'ArialMT','Arial',sans-serif"
							fontSize="12px"
						>
							<text
								x="393.475px"
								y="85.831px"
								transform="matrix(.74911 0 0 .74857 -248.549 207.117)"
							>
								{'V'}
								<tspan
									x="401.033px 407.707px"
									y="85.831px 85.831px"
								>
									{'ue'}
								</tspan>
							</text>
							<text
								x="387.252px"
								y="98.223px"
								transform="matrix(.74911 0 0 .74857 -248.549 207.117)"
							>
								{'Svelte'}
							</text>
						</g>
					</g>
					<g>
						<path
							id="sql-box"
							fill="#fff"
							stroke="#000"
							strokeWidth=".83px"
							d="M11.499 593.726H94.832V618.726H11.499z"
						/>
						<g
							id="sql-text"
							fontFamily="'ArialMT','Arial',sans-serif"
							fontSize="12px"
						>
							<text
								x="383.924px"
								y="85.831px"
								transform="matrix(.74911 0 0 .74857 -249.461 539.77)"
							>
								{'MySQL'}
							</text>
							<text
								x="380.25px"
								y="98.223px"
								transform="matrix(.74911 0 0 .74857 -249.461 539.77)"
							>
								{'Postgres'}
							</text>
						</g>
					</g>
					<g>
						<path
							id="graph-box"
							fill="#fff"
							stroke="#000"
							strokeWidth=".83px"
							d="M28.166 677.06H111.499V702.06H28.166z"
						/>
						<text
							x="51.305px"
							y="691.984px"
							fontFamily="'ArialMT','Arial',sans-serif"
							fontSize="8.989px"
							transform="matrix(1 0 0 .99928 0 .454)"
							id="graph-text"
						>
							{'GraphQL'}
						</text>
					</g>
					<g>
						<path
							id="native-box"
							fill="#fff"
							stroke="#000"
							strokeWidth=".83px"
							d="M44.832 760.393H128.165V785.393H44.832z"
						/>
						<text
							x="60.729px"
							y="775.317px"
							fontFamily="'ArialMT','Arial',sans-serif"
							fontSize="8.989px"
							transform="matrix(1 0 0 .99928 0 .515)"
							id="native-text"
						>
							{'React Native'}
						</text>
					</g>
					<g>
						<path
							id="ui-libs-box"
							fill="#fff"
							stroke="#000"
							strokeWidth=".83px"
							d="M28.166 327.06H111.499V352.06H28.166z"
						/>
						<text
							x="47.042px"
							y="342.703px"
							fontFamily="'ArialMT','Arial',sans-serif"
							fontSize="8.989px"
							transform="matrix(1 0 0 .99928 0 .202)"
							id="ui-libs-text"
						>
							{'UI Libraries'}
						</text>
					</g>
					<g>
						<path
							id="auth-box"
							fill="#fff"
							stroke="#000"
							strokeWidth=".83px"
							d="M44.832 385.393H128.165V410.393H44.832z"
						/>
						<text
							x="58.202px"
							y="401.036px"
							fontFamily="'ArialMT','Arial',sans-serif"
							fontSize="8.989px"
							transform="matrix(1 0 0 .99928 0 .244)"
							id="auth-text"
						>
							{'Authentication'}
						</text>
					</g>
					<g>
						<path
							id="ui-libs-box1"
							fill="#fff"
							stroke="#000"
							strokeWidth=".83px"
							d="M294.832 302.06H378.16499999999996V327.06H294.832z"
						/>
						<g
							id="ui-libs-text1"
							fontFamily="'ArialMT','Arial',sans-serif"
							fontSize="12px"
						>
							<text
								x="372.908px"
								y="85.831px"
								transform="matrix(.74911 0 0 .74857 34.785 248.784)"
							>
								{'Component'}
							</text>
							<text
								x="380.918px"
								y="98.223px"
								transform="matrix(.74911 0 0 .74857 34.785 248.784)"
							>
								{'Libraries'}
							</text>
						</g>
					</g>
					<g>
						<path
							id="html-box"
							fill={htmlStatus.status}
							stroke="#000"
							strokeWidth=".83px"
							d="M161.499 10.393H244.832V35.393H161.499z"
						/>
						<text
							x="190.731px"
							y="26.233px"
							fontFamily="'ArialMT','Arial',sans-serif"
							fontSize="8.989px"
							transform="matrix(1 0 0 .99928 0 -.028)"
							id="html-text"
						>
							{'HTML'}
						</text>
					</g>
				</svg>
			)}
		</>
	);
}

export default RoadmapSvg;
