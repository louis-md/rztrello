import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { useState } from 'react';
import rzcLogo from './assets/images/reezocar.svg';
import List from './components/List';
import NewList from './components/NewList';

function App() {
   const [lists, setLists] = useState([null]);

   return (
      <div className={css([styles.main, styles.root])}>
         <nav className={css(styles.nav)}>
            <img src={rzcLogo} className={css(styles.logo)} alt="RzcLogo" />
         </nav>

         <div className={css([styles.layer1])}>
            <div className={css(styles.boardWrapper)}>
               <div className={css(styles.boardHeader)}>
                  <div className={css(styles.boardHeaderName)}>Tableau Reezocar</div>
                  <button className={css(styles.boardHeaderButton)}>
                     Initialiser le jeu de données
                  </button>
               </div>

               <div className={css(styles.boardCanvas)}>
                  {lists.map((list, index) => {
                     if (list !== null) {
                        return (
                           <div key={index} className={css(styles.listWrapper)}>
                              <List title={lists[index]} />
                           </div>
                        );
                     }
                  })}

                  <div className={css(styles.newListWrapper)}>
                     <NewList
                        createList={listTitle => {
                           setLists([...lists, listTitle]);
                        }}
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;

const styles = StyleSheet.create({
   main: {
      color: '#172b4d',
      fontFamily:
         '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif',
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: '400',
   },

   root: {
      height: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      zIndex: '0',
      overflow: 'hidden',
      height: '100%',
      zIndex: '1',
      overflow: 'hidden',
      backgroundColor: 'rgb(131, 140, 145)',
      backgroundPosition: '50%',
      backgroundSize: 'cover',
   },

   layer1: {
      height: '100%',
      position: 'relative',
      zIndex: '0',
   },

   boardWrapper: {
      position: 'relative',
      overflowY: 'auto',
      outline: 'none',
      display: 'flex',
      flexGrow: '1',
      display: 'flex',
      height: '100%',
      flexDirection: 'column',
      marginRight: '0',
      transition: 'margin .1s ease-in',
   },

   boardHeader: {
      height: 'auto',
      padding: '8px 4px 4px 8px',
      position: 'relative',
      transition: 'padding .1s ease-in',
   },

   boardHeaderName: {
      background: 'transparent',
      cursor: 'default',
      fontSize: '18px',
      fontWeight: '700',
      lineHeight: '32px',
      padding: '0, 12px',
      textDecoration: 'none',
      maxWidth: 'calc(100% - 24px)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      borderRadius: '3px',
      color: '#fff',
      float: 'left',
      height: '32px',
      margin: '0 4px 4px 0',
      position: 'relative',
   },

   boardHeaderButton: {
      borderRadius: '3px',
      color: '#fff',
      cursor: 'default',
      float: 'left',
      fontSize: '14px',
      height: '32px',
      lineHeight: '32px',
      margin: '0 4px 4px 0',
      overflow: 'hidden',
      position: 'relative',
      textDecoration: 'none',
      backgroundColor: '#5aac44',
      border: 'none',
   },

   boardCanvas: {
      position: 'relative',
      flexGrow: '1',
   },

   listWrapper: {
      width: '272px',
      margin: '0 4px',
      height: '100%',
      boxSizing: 'border-box',
      display: 'inline-block',
      verticalAlign: 'top',
      whiteSpace: 'nowrap',
   },

   newListWrapper: {
      backgroundColor: '#ebecf0',
      borderRadius: '3px',
      height: 'auto',
      minHeight: '32px',
      padding: '4px',
      transition: 'background 85ms ease-in,opacity 40ms ease-in,border-color 85ms ease-in',
      width: '272px',
      margin: '0 4px',
      boxSizing: 'border-box',
      display: 'inline-block',
      verticalAlign: 'top',
      whiteSpace: 'nowrap',
   },

   nav: {
      background: 'black',
      height: '32px',
   },
   
   logo: {
      justifyContent: 'center',
      margin: '0 0 0 45%',
      height: '80%',
   },
});
