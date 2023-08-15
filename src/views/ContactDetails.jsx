import React, { useEffect, useState } from 'react'
import { robotService } from '../services/robotService'

export function RobotDetails({ robotId, onBack }) {

    const [robot, setRobot] = useState(null)


    useEffect(() => {
        loadRobot()
    }, [])


    async function loadRobot() {
        const robot = await robotService.getById(robotId)
        setRobot(robot)
    }

    if (!robot) return <div>Loading...</div>
    return (
        <section className='robot-details'>
            <section>
                <h3>Model: {robot.model}</h3>
            </section>
            <section>
                <h3>Type: {robot.type}</h3>
            </section>
            <section>
                <h3>batteryStatus: {robot.batteryStatus}</h3>
            </section>
            <img src={`https://robohash.org/${robot._id}`} />
            <button onClick={onBack}>Back</button>
        </section>
    )
}
