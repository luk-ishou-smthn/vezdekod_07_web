import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Placeholder from '@vkontakte/vkui/dist/components/Placeholder/Placeholder'


const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Пожертвования</PanelHeader>
		<Div style={{display: 'flex',
			    alignItems: 'center',
			    justifyContent: 'center',}}>
			<Placeholder
            //>icon={<Icon56UsersOutline />}
            //>header="Уведомления от сообществ"
            action={<Button size='l' onClick={go} data-to="persik">
					Создать сбор
				</Button>}
				>
            {`У вас пока нет сборов.
            Начните доброе дело`}
         	</Placeholder>
		</Div>
		
		

	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
