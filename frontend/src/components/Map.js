import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { mapRedux } from '../redux/Map';
import MapSquare from './MapSquare';
import { keysRedux } from '../redux/Keys';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex", 
        flexFlow: "row nowrap", 
    },
    mapRow: {
        display :"flex", 
        flexFlow: "column nowrap", 
    }
}));



function Map({ map, keyPress, }) {
    const classes = useStyles();

    useEffect(()=> {

        const el =  (event) => {
            console.log(event.keyCode);
            keyPress(event.keyCode); 
        }; 
        document.addEventListener("keydown",el , false);

        return () => {
            //Unbind event listeners.
            document.removeEventListener("keydown", el); 
        }
    })
    return <div className= {classes.root}>

        {map.map((v,i) => {
            return <div className ={classes.mapRow} key = {`maprow-${i}`}>{v.map((w,j) => {            
              return  <MapSquare x = {i} y = {j} key = {`mapsquare-${i}-${j}`}/>
            })}</div>
        })}
    </div>
;
}


const mapStateToProps = (
    state,
    ownProps
) => {
    return {
      map: mapRedux.dataSelector(state),   
    };
};

const mapDispatchToProps = dispatch => {
    return {
        keyPress: key => dispatch(keysRedux.actionFn(key))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map);