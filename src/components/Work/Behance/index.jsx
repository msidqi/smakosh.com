import React, { Component } from 'react'

import SingleWork from '../SingleWork'

export default class Behance extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [
                {
                    id: 0,
                    title: 'Uboux Logo',
                    image: this.props.firstImg,
                    link: 'https://www.behance.net/gallery/43074239/UBOUX-Logo-identity'
                },
                {
                    id: 1,
                    title: 'Catch it 1.0',
                    image: this.props.secondImg,
                    link: 'https://play.google.com/store/apps/details?id=com.smakosh.atchit'
                },
                {
                    id: 2,
                    title: 'Luca-steeb.com',
                    image: this.props.thirdImg,
                    link: 'https://luca-steeb.com'
                }
            ]
        }
    }
    render() {
        return (
            <div
                style={{
                    background: '#fff',
                    marginBottom: '2.5rem'
                }}
            >   
                <h3>Shared on Behance</h3>
                <div className="work">
                    {
                        this.state.projects.map((project) => (
                            <SingleWork
                                key={project.id}
                                id={project.id}
                                title={project.title}
                                image={project.image}
                                link={project.link}
                            />
                        ))
                    }
                    <a 
                        href="https://www.behance.net/ismail16sm9991" 
                        target="_blank"
                        style={{
                            backgroundColor: 'rgb(0, 119, 255)'
                        }}
                        className="more"
                    >
                        See more
                    </a>
                </div>
            </div>
        )
    }
}