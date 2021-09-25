import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'high' | 'middle' | 'low' // need to fix any - COMPLETED
export type AffairType = {
    _id: number
    name: string
    priority: string
} // need to fix any - COMPLETED
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [ // need to fix any - COMPLETED
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // need to fix any - COMPLETED
    if (filter === 'all') {
        return affairs
    }
    else if (filter === 'low') {
        return affairs.filter( a => a.priority==="low" )
    }
    else if (filter === 'middle') {
        return affairs.filter( a => a.priority==="middle" )
    }
    else return affairs.filter( a => a.priority==="high" )
    // need to fix - COMPLETED
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => { // need to fix any -COMPLETED
    return affairs.filter( a => a._id !== _id)// need to fix -COMPLETED
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any - COMPLETED
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any - COMPLETED

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
