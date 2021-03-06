import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import UsersStack from '@vkontakte/vkui/dist/components/UsersStack/UsersStack'
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Title from '@vkontakte/vkui/dist/components/Typography/Title/Title';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';
import Progress from '@vkontakte/vkui/dist/components/Progress/Progress';
import InfoRow from '@vkontakte/vkui/dist/components/InfoRow/InfoRow';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import PanelHeaderContent from '@vkontakte/vkui/dist/components/PanelHeaderContent/PanelHeaderContent';

import persik from '../img/cat 1.png';

const osName = platform();


const SnippetInfo = props => (
	<Panel id={props.id} style={{display: 'flex', padding:'0'}}>
		<PanelHeader separator={false} style={{background: 'black'}}></PanelHeader>
		<Div style={{display: 'flex',
				height: '100%',
			    alignItems: 'top',
			    justifyContent: 'center',padding:'0',
			          position: 'absolute', top:0, left:0, width:'100%'}}>
			       <Group style={{width: '100%'}}>
			      	<div style={{
			          background: '#fff',
			          border: '0.5px solid rgba(0, 0, 0, .1)',
			          justifyContent: 'center',
			          width: '100%',
			          borderRadius: 12, margin:0
			        }}>
			        	<img  style={{display: 'block', width: '100%'}}
				        src={persik} alt="Persik The Cat"/>
				        <Header>Одному берлинскому пациенту</Header>
				        <Div  style={{fontSize: '0.8em', paddingTop:'0'}}>
				        	За прекрасную Россию будущего!
				        </Div>
				        <Separator></Separator>
				        <Div>
				        	<InfoRow style={{display: 'inline-block', width: '70%', marginRight: '10px'}} 
				        		header="Собрано в сентябре 1 337 ₽">
				        	<Progress value={30}></Progress>
				        	</InfoRow>
				        	<Button style={{display: 'inline-block', float: 'right'}} mode="outline">Помочь</Button>
				        </Div>

				        <Separator></Separator>
				        
			    </div>
			</Group>
		</Div>
	</Panel>
);

SnippetInfo.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,

};

export default SnippetInfo;
