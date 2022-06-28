import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Select from '../../components/Select/Select'
import ButtonArrow from '../../components/ButtonArrow/ButtonArrow'

import './homepage.css'
import { useState } from 'react'

function HomePage() {
    const [Options, SetOptions] = useState(['По дате изменения', 'По автору', 'По теме', 'По количеству ответов'])

    const ChangeFilter = (e) => {
        console.log(e)
    }
    return (
        <div className='homepage_container'>
            <div className="search_container">
                <Input placeholder="Введите свой вопрос" />
                <Button label='Поиск' />
            </div>
            <div className="filters_container">
                <Select options={Options} onChange={(e) => ChangeFilter(e)} />
                <ButtonArrow />
                <ButtonArrow rotate='180'/>
            </div>
            <div className="table">
                <p>Автор вопроса</p>
                <p>Тема</p>
                <p>Количество ответов</p>
                <p>Тэги</p>
            </div>
        </div>
    )
}

export default HomePage