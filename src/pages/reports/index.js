import React from 'react';
import groupBy from 'lodash/groupBy';
import moment from 'moment';
import {
    XYPlot,
    DiscreteColorLegend,
    VerticalGridLines,
    HorizontalGridLines,
    XAxis,
    YAxis,
    VerticalBarSeries,
} from 'react-vis';
import Layout from '../../components/layout';
import styles from './style.module.scss';
import { UsuariosContext } from '../../context/usuarios';
import Navigation from '../../components/navigation'

function getDefaultDays() {
    const start = moment().startOf('day');
    const mask = 'DD MMM, YYYY';

    return {
        [start.format(mask)]: { total: 0, timestamp: start.valueOf() },
        [start.add(1, 'day').format(mask)]: { total: 0, timestamp: start.valueOf() },
        [start.add(1, 'day').format(mask)]: { total: 0, timestamp: start.valueOf() },
        [start.add(1, 'day').format(mask)]: { total: 0, timestamp: start.valueOf() },
        [start.add(1, 'day').format(mask)]: { total: 0, timestamp: start.valueOf() },
    };
}

function formatUsuarios(usuarios) {
    const config = {
        Ejecutivo: {
            color: '#f00',
            title: 'ejecutivo',
            strokeWidth: 10,
        },
        PrimeraClase: {
            color: '#0f0',
            title: 'primeraclase',
            strokeWidth: 10,
        },
        VIP: {
            color: '#00f',
            title: 'vip',
            strokeWidth: 10,
        },
    };
    const usuariosByType = groupBy(usuarios, n => n.tren);

    return Object.entries(usuariosByType).map(([key, arr]) => {
        const totals = arr.reduce((result, usuario) => {
            const date = moment(usuario.date).startOf('day');
            const key = date.format('DD MMM, YYYY');

            if (!result[key]) {
                result[key] = { total: 0, timestamp: date.valueOf() };
            }

            result[key].total += usuario.amount;

            return result;
        }, getDefaultDays());

        let data = Object.entries(totals).map(([key, data]) => ({
            x: key,
            y: data.total,
            timestamp: data.timestamp,
        }));

        data.sort((a, b) => {
            if (a.timestamp > b.timestamp) return 1;
            if (a.timestamp < b.timestamp) return -1;
            return 0;
        });

        return {
            ...config[key],
            type: key,
            data,
        };
    });
}

class Page extends React.Component {
    render() {
        const { usuarios } = this.context;
        const groups = formatUsuarios(usuarios);

        return (
            <div>
            <Navigation />
            <Layout>
                <div className={styles.container}>
                    <div>
                        <DiscreteColorLegend
                            className={styles.legends}
                            orientation="horizontal"
                            items={groups.map(n => ({
                                title: n.title,
                                strokeWidth: n.strokeWidth,
                                color: n.color,
                            }))}
                        />
                        <XYPlot
                            className={styles.xyPlot}
                            xType="ordinal"
                            stackBy="y"
                            width={window.innerWidth * .8}
                            height={500 > window.innerHeight ? window.innerHeight : 500}
                        >
                            <VerticalGridLines />
                            <HorizontalGridLines />
                            <XAxis />
                            <YAxis />
                            {groups.map(group =>
                                <VerticalBarSeries
                                    key={group.title}
                                    color={group.color}
                                    data={group.data}
                                />
                            )}
                        </XYPlot>
                    </div>
                </div>
            </Layout>
            </div> 
        );
    }
}

Page.contextType = UsuariosContext;

export default Page;