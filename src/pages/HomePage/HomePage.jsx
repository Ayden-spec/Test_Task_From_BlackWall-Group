import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Select from '../../components/Select/Select'
import ButtonArrow from '../../components/ButtonArrow/ButtonArrow'
import './homepage.css'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { GetQuestion } from '../../actions/actions'
import { useMemo } from 'react'

function HomePage() {
    const [Options, SetOptions] = useState(['По дате изменения', 'По автору', 'По теме', 'По количеству ответов']);
    const [OptionsValue, SetOptionsValue] = useState('По дате изменения');
    const [Order, SetOrder] = useState(true);
    const [Search, SetSearch] = useState('');

    const dispatch = useDispatch();
    const questions = useSelector(state => state.client.questions)

    const QuestionsArray = useMemo(() => {
        let result = []
        switch (OptionsValue) {
            case 'По дате изменения':
                if (Order) {
                    result = [...questions].sort((a, b) => a.last_activity_date - b.last_activity_date)
                } else {
                    result = [...questions].sort((a, b) => b.last_activity_date - a.last_activity_date)
                }
                break;
            case 'По автору':
                if (Order) {
                    result = [...questions].sort((a, b) => a.owner.display_name.toLowerCase() < b.owner.display_name.toLowerCase() ? -1 : 1)
                } else {
                    result = [...questions].sort((a, b) => b.owner.display_name.toLowerCase() < a.owner.display_name.toLowerCase() ? -1 : 1)
                }
                break;
            case 'По теме':
                if (Order) {
                    result = [...questions].sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1)
                } else {
                    result = [...questions].sort((a, b) => b.title.toLowerCase() < a.title.toLowerCase() ? -1 : 1)
                }
                break;
            case 'По количеству ответов':
                if (Order) {
                    result = [...questions].sort((a, b) => a.answer_count - b.answer_count)
                } else {
                    result = [...questions].sort((a, b) => b.answer_count - a.answer_count)
                }
                break;
        }
        return result
    })

    const HandleClickSearch = () => {
        dispatch(GetQuestion(Search))
    }

    useEffect(() => {
        dispatch(GetQuestion(''))
    }, [])

    return (
        <div className='homepage_container'>
            <div className="search_container">
                <Input placeholder="Введите свой вопрос" value={Search} onChange={(e) => SetSearch(e)} />
                <Button label='Поиск' Click={HandleClickSearch} />
            </div>
            <div className="filters_container">
                <Select options={Options} onChange={(e) => SetOptionsValue(e)} />
                <ButtonArrow Click={() => SetOrder(true)} />
                <ButtonArrow rotate='180' Click={() => SetOrder(false)} />
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Автор вопроса</th>
                        <th>Тема</th>
                        <th>Количество ответов</th>
                        <th>Теги</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        QuestionsArray.map(element => (
                            <tr key={element.question_id}>
                                <td>{element.owner.display_name}</td>
                                <td>{element.title}</td>
                                <td>{element.answer_count}</td>
                                <td>{element.tags.map((tag, index) => (
                                    <span key={index}>{tag}</span>
                                ))}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default HomePage