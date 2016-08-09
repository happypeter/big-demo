import React from 'react';
import echarts from 'echarts';

class Echart extends React.Component {
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({
      title:{
        show:true,
        text:'我的技能展示',
        left:'center',
        textStyle:{
          color:'#2196F3'
        }
      },
      color: ['#3398DB'],
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          data : ['HTML', 'CSS', 'JS', 'React', 'Meteor', 'Node', 'Mongo'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis : [
        {
          type : 'value',
          name:'百分数(%)',
          nameTextStyle:{
            color:'#2196F3',
            fontSize:'16'
          }
        }
      ],
      series : [
        {
          name:'技能熟练度',
          type:'bar',
          barWidth: '60%',
          data:[96, 98, 88, 90, 70, 70, 50]
        }
      ]
    });
  }
  render () {
    return(
      <div id='main' style={{width:'100%',height:'50vw',maxHeight:'400px'}}></div>
    )
  }
}

export default Echart;
