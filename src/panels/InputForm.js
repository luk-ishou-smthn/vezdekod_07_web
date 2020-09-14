import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Radio from '@vkontakte/vkui/dist/components/Radio/Radio'
import Div from '@vkontakte/vkui/dist/components/Div/Div'
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout'
import FormLayoutGroup from '@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup'
import Input from '@vkontakte/vkui/dist/components/Input/Input'
import File from '@vkontakte/vkui/dist/components/File/File'
import Textarea from '@vkontakte/vkui/dist/components/Textarea/Textarea'
import { Select } from '@vkontakte/vkui';
import Icon24Camera from '@vkontakte/icons/dist/24/camera';
import Headline from '@vkontakte/vkui/dist/components/Typography/Title/Title'
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osName = platform();

let collect_type = 'monthly';
let collect_name = 'name';
let collect_money = 'money';
let collect_goal = 'goal';
let collect_description = 'description';
let collect_card = 'card';

let fieldsValues = {collect_type:'monthly',
    collect_name: null,
    collect_money: null,
    collect_goal: null,
    collect_description: null,
    collect_card: null,
    fieldsValues: null};


const InputForm = props => (
    <Panel id={props.id}>
        <PanelHeader left={<PanelHeaderButton onClick={props.go} data-to="home">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </PanelHeaderButton>}>Создание сбора</PanelHeader>
        <FormLayout>
            <File top="Загрузите обложку" before={<Icon24Camera />} controlSize="l">
                Открыть галерею
            </File>

            <div top="Тип сбора">
                <Radio name="radio" value="1" description="Если помощь нужна ежемесячно" defaultChecked
                       onChange={() => {document.getElementsByClassName('FormLayout__row')[3].getElementsByClassName('FormLayout__row-top')[0].textContent = 'Сумма в месяц, ₽';
                       document.getElementsByName('place_sum_month')[0].placeholder = 'Сколько нужно в месяц?';
                           fieldsValues['collect_type'] = 'monthly'}}>
                    Регулярный сбор
                </Radio>
                <Radio name="radio" value="2" description="Когда есть определённая цель"
                       onChange={() => {document.getElementsByClassName('FormLayout__row')[3].getElementsByClassName('FormLayout__row-top')[0].textContent = 'Сумма, ₽'
                       document.getElementsByName('place_sum_month')[0].placeholder = 'Сколько необходимо собрать?';
                           fieldsValues['collect_type'] = 'defined'}}>
                    Целевой сбор
                </Radio>
            </div>

            <FormLayoutGroup top="Название сбора">
                <Input type="text" placeholder="Название сбора" align="left"/>
            </FormLayoutGroup>

            <FormLayoutGroup top="Сумма в месяц, ₽" name='sum_month' data-id = 'lytn'>
                <Input type='number' name='place_sum_month' pattern="[0-9]*" placeholder="Сколько нужно в месяц?" align="left"/>
            </FormLayoutGroup>

            <FormLayoutGroup top="Цель">
                <Input type="text" placeholder="Например, поддержка одного гражданина" align="left"/>
            </FormLayoutGroup>

            <FormLayoutGroup top="Описание">
                <Textarea type="text" placeholder="На что пойдут деньги и как они кому-то помогут?" align="left"/>
            </FormLayoutGroup>

            <Select top="Куда получать деньги" placeholder='Выберите счет'>
                <option value="card">Счет VK Pay · 1234</option>
                <option value="kek">Счет одного политика</option>
            </Select>

            <Button size="xl" mode="primary" onClick={props.go} data-to="snippet">Далее</Button>

        </FormLayout>
    </Panel>
);

InputForm.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired
};

export default InputForm;