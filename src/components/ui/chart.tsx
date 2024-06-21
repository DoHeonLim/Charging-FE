import React, { PureComponent } from 'react';
import {
  BarChart,
  LineChart,
  PieChart,
  ComposedChart,
  Treemap,
  Bar,
  Line,
  Pie,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import { evData } from '../../data/chart-ev';
import { co2Data } from '../../data/chart-co2';
import { batPriceData } from '../../data/chart-battery-price';
import { chargerData } from '../../data/chart-charger';

interface CustomizedLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}

interface CustomizedContentProps {
  root: any;
  depth: number;
  x: number;
  y: number;
  width: number;
  height: number;
  index: number;
  colors: string[];
  name: number;
}

// 전기차 수 + 미래 예측
const CustomLineChart: React.FC = () => {
  return (
    <ResponsiveContainer width='70%' height={550}>
      <div>전 세계 전기차 수 및 미래 예측</div>
      <LineChart
        width={500}
        height={300}
        data={evData}
        margin={{ top: 50, right: 30, left: 30, bottom: 50 }}
        style={{ cursor: 'pointer' }}
      >
        <XAxis dataKey='Year' />
        <Tooltip />
        <Legend wrapperStyle={{ paddingTop: '20px' }} />
        <Line
          type='natural'
          dataKey='Num of EVs'
          stroke='#FACC15'
          strokeWidth={2}
          animationBegin={0}
          animationDuration={1800}
          animationEasing='ease-out'
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

// 탄소 배출 비교
const COLORS = ['#979fdf', '#82ca9d', '#FED33C', '#f3aad3'];

const RADIAN = Math.PI / 182;
const renderCustomizedLabel = (props: CustomizedLabelProps) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.45;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill='white' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central'>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomPieChart: React.FC = () => {
  return (
    <ResponsiveContainer width='70%' height={550}>
      <div>차종 별 탄소배출 비교</div>
      <PieChart
        width={400}
        height={400}
        style={{ cursor: 'pointer' }}
        margin={{ right: 30, left: 30, bottom: 50 }}
      >
        <Legend layout='horizontal' verticalAlign='bottom' align='center' />
        <Pie
          data={co2Data}
          nameKey='car type'
          dataKey='pounds of CO2'
          cx='50%'
          cy='50%'
          labelLine={false}
          label={renderCustomizedLabel}
          innerRadius={70}
          outerRadius={200}
          fillOpacity={0.9}
          animationBegin={0}
          animationDuration={1800}
          animationEasing='ease-out'
        >
          <Tooltip />
          {co2Data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

// 배터리 가격 비교
const CustomBarChart: React.FC = () => {
  return (
    <ResponsiveContainer width='70%' height={550}>
      <div>년도별 배터리 가격</div>
      <ComposedChart
        width={500}
        height={400}
        data={batPriceData}
        margin={{ top: 50, right: 30, left: 30, bottom: 30 }}
        style={{ cursor: 'pointer' }}
      >
        <XAxis dataKey='Year' />
        <Tooltip />
        <Bar
          dataKey='Price'
          fill='#FED33C'
          fillOpacity={0.8}
          barSize={50}
          animationBegin={0}
          animationDuration={1800}
          animationEasing='ease-in-out'
        />
        <Line
          type='natural'
          dataKey='Price Trend'
          stroke='#82ca9d'
          strokeWidth={2}
          animationBegin={0}
          animationDuration={2200}
          animationEasing='ease-in-out'
        />
        <Legend wrapperStyle={{ paddingTop: '20px' }} />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

// 전국 충전소 비교
class CustomizedContent extends PureComponent<CustomizedContentProps> {
  render() {
    const { root, depth, x, y, width, height, index, colors, name } = this.props;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: depth < 2 ? colors[Math.floor((index / root.children.length) * 4)] : '#ffffff00',
            stroke: '#fff',
            strokeWidth: 1 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        {depth === 1 ? (
          <text
            x={x + width / 2.1}
            y={y + height / 2 + 7}
            textAnchor='middle'
            fill='#fff'
            fontSize={20}
          >
            {name}
          </text>
        ) : null}
      </g>
    );
  }
}

const CustomTreeMapChart: React.FC = () => {
  const renderCustomizedContent = (props: any) => <CustomizedContent {...props} colors={COLORS} />;

  return (
    <ResponsiveContainer width='70%' height={400} style={{ padding: '70px 0'}} >
      <div>년도별 전국 충전기 현황</div>
      <Treemap
        width={400}
        height={200}
        data={chargerData}
        dataKey='Num of Chargers'
        fillOpacity={0.9}
        animationBegin={0}
        animationDuration={1500}
        animationEasing='ease'
        content={renderCustomizedContent}
      />
    </ResponsiveContainer>
  );
};

export { CustomLineChart, CustomPieChart, CustomBarChart, CustomTreeMapChart };
