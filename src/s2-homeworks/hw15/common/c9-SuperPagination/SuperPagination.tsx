import React, {ChangeEvent} from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page,
        itemsCountForPage,
        totalCount,
        onChange,
        id = 'hw15',
    }
) => {
    const lastPage = Math.ceil(totalCount / itemsCountForPage) // чтобы вычислить количество страниц на основе totalCount и itemsCountForPage.


    const onChangeCallback = (event: React.ChangeEvent<unknown>, page: number) => {
        onChange(page, itemsCountForPage); // при нажатии на какую либо страницу сработает onChange
    }

    const onChangeSelect = (event: any) => {
        onChange(page, event);
        //В функции onChangeSelect добавлена строка const count = event.target.value as number; для извлечения выбранного значения.
        // В функции onChangeSelect вызывается onChange(1, count) для передачи новых значений страницы и количества элементов на странице в функцию onChange.
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    // стили для Pagination // пишет студент
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChangeOption={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
