import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title'
class Services extends Component {
  constructor(props){
      super(props);
      this.state = {
        services:[
        {
            icon:<FaCocktail/>,
            title:"free cocktails",
            info:'its very special drink to have'
        },
        {
            icon:<FaHiking/>,
            title:"Endless hiking",
            info:'its very special hiking to have'
        },
        {
            icon:<FaShuttleVan/>,
            title:"free shuttle",
            info:'its very special free service to take'
        },
        {
            icon:<FaBeer/>,
            title:"strongest beer",
            info:'its very special drink to have'
        }
    ]
      };
  }
  render() {
    return (
      <section className="services">
        <Title title="services"/>
        <div className="services-center">
        {this.state.services.map((item,index) => {
            return <article key={index} className="service">
            <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
            </article>
        })}
        </div>
      </section>
    )
  }
}
export default Services