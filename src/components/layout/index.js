import React, { Fragment } from 'react';
import styles from './style.module.scss';
import Exit from '../../Exit';


class Layout extends React.Component {
    render() {
        const {
            children,
        } = this.props;

        return (
            <Fragment>
                
                <div className={styles.content}>
                    {children}
                </div>
                <div>
                    <Exit />
                </div>
            </Fragment>
        );
    };
}

export default Layout;
