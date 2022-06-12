import React from 'react';
import Back from '../back/Back';
import './team.css';
import TeamCard from './TeamCard';




const Team = () => {




    return (
        <>
        <Back title="team" />
        <section className="team padding">
            <div className="container grid">

                <TeamCard />

            </div>

        </section>
        </>)


    }


export default Team