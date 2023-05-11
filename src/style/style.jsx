const style = {
    lottieAnimation: {
        hoverContainer: {
            height: '100%',
            width: 'fit-content',
            margin: 'auto'
        }
    },

    landingPage: {
        leadingContainer: {
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            display: 'grid',
            gridTemplateRows: '1fr 12fr 140px'
        },
        leadingContent: {
            height: '100%'
        }
    },

    header: {
        headerContainer: {
            minHeight: '60px',
            display: 'grid',
            gridTemplateColumns: '1fr 9fr',
            backgroundColor: 'rgba(248, 245, 255, 1)'
        },
        headerLogoContainer: {
            height: '100%',
            minWidth: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start'
        },
        headerMenuContainer: {
            // backgroundColor: 'red',
            minWidth: '300px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'end'
        },
        headerLogoSvg: {
            height: '40px',
            marginLeft: '10px'
        },
        headerMenuButton: {
            padding: '0px 20px',
            margin: '0px 5px',
            cursor: 'pointer',
            transition: 'all ease .3s',
            fontSize: '120%'
        },

        hoverButton: {
            padding: '0px 20px',
            margin: '0px 5px',
            cursor: 'pointer',
            color: 'grey',
            transition: 'all ease .3s',
            fontSize: '120%',
            fontWeight: 'bold'
        },

        selectedButton: {
            padding: '0px 20px',
            margin: '0px 5px',
            cursor: 'pointer',
            color: 'orange',
            // transition: 'all ease .3s',
            fontSize: '120%',
            fontWeight: 'bold'
        },
    },

    Main: {
        mainContainer: {
            width: '100%',
            height: '100%',
            // backgroundColor: 'orange',
            display: 'grid',
            gridTemplateRows: '9fr 1fr'
        },
        heroContainer: {
            width: '100%',
            height: '30%',
            overflow: 'none',
            backgroundColor: 'pink'
        },
        heroImage: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundSize: 'contain'
            
        },
        heroBox: {
            width: '80%',
            height: '100%',
            margin: '0 auto',
            backgroundColor: 'blue',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        mainTextContainer: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'end',
            fontFamily: 'handWriting'
        },
        mainText: {
            padding: '0'
        }
    },

    Footer: {
        footerOutContainer: {
            width: '100%',
            // backgroundColor: 'rgba(248, 245, 239, 1)'
        },
        footerContainer: {
            width: '60%',
            height: '100%',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            minWidth: '580px'
        },
        footerDivider: {
            width: '100%',
            borderTop: '3px solid lightgrey',
            margin: '0 0 5px 0'
        },
        footerContentContainer: {
            // display: 'grid',
            // gridTemplateColumns: '1fr 1fr'
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start'
        },
        footerLeftContent: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '50%',
            minWidth: '280px',
            margin: '0 5px 0 0'
        },
        footerRightContent: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '50%',
            minWidth: '280px',
            margin: '0 0 0 5px'
        },
        footerContentText: {
            margin: '5px 0',
            fontSize: '13px'
        },
        footerLogoContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        },
        footerLogoImg: {
            width: '20px',
            height: '20px',
            margin: '0 2.5px'
        },
        footerEmailInput: {
            width: '70%',
            minWidth: '200px',
            height: '23px'
        },
        footerEmailBtn: {
            minWidth: '200px',
            height: '25px',
            backgroundColor: 'black',
            border: '1px solid white',
            padding: '0',
            color: 'white'
        },
        footerEmailContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }
    },

    Map: {
        mapContainer: {
            width: '100%',
            height: '100%'
        }
    },

    SearchPage: {
        searchPageContainer: {
            width: '100%',
            height: '100%',
            display: 'flex'
        },
        searchPageListContainer: {
            backgroundColor: 'pink',
            overflow: 'scroll'
        },
        searchPageInputContainer: {
            width: '100%',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        searchPageInput: {
            width: '70%',
            height: '60%'
        }
    },

    Login: {
        loginContainer: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        loginInputContainer: {
            width: '40%',
            height: '30px',
            minWidth: '200px',
            display: 'flex',
            alignItems: 'center',
            margin: '10px 0'
        },
        loginInputField: {
            width: '70%',
            height: '80%',
            marginLeft: '10px'
        },
        loginBtn: {
            height: '20px',
            border: '1px black solid',
            borderRadius: '5px',
            textAlign: 'center',
            margin: '10px',
            cursor: 'pointer'
        }
    }
}

export default style;