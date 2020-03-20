import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NewCard from './NewCard'
import Card from './Card'
import { useState } from 'react';

export default function List(props) {
    const [cards, setCards] = useState([null])

    return (
        <div className={css(styles.list)}>
            <div className={css(styles.listHeader)}>
                <div className={css(styles.listTitle)}>
                 {props.title}
                </div>
            </div>

            <div className={css(styles.listCards)}>
            {cards.map((card, index) => {
                if (card !== null) {
                    return (
                        <div key={index}>
                            <Card card={cards[index]} />
                        </div>
                    )
                }
            })}
            <NewCard createCard={(cardTitle) => {setCards([...cards, {title: cardTitle, list: props.title, description: null, followed: false}])}} />
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#ebecf0',
        borderRadius: '3px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '100%',
        position: 'relative',
        whiteSpace: 'normal',
    },

    listHeader: {
        paddingRight: '36px',
        paddingLeft: '16px',
        cursor: 'pointer',
    },

    listCards: {
        flex: '1 1 auto',
        marginBottom: '0',
        overflowY: 'auto',
        overflowX: 'hidden',
        margin: '0 4px',
        padding: '0 4px',
        zIndex: '1',
        minHeight: '0',
    },

    listFooter: {
        minHeight: '38px',
        maxHeight: '38px',
        display: 'flex',
        justifyContent: 'space-between',
    },

    listTitle: {
        fontWeight: '600',
        margin: '0 0 8px',
        fontSize: '20px',
        lineHeight: '24px',
        marginBlockStart: '0.83em',
        marginBlockEnd: '0.83em',
        marginInlineStart: '0px',
        marginInlineEnd: '0px',
        unicodeBidi: '-webkit-isolate',
    },
})
