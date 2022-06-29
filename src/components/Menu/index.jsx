import {Container,InputSearch,Logo,AreaMenu,Button,AreaMenuText} from './styles';


export function Menu() {
  return (
    <Container>
    	<Logo>
			Sapphire
		</Logo>
	  	<AreaMenu>
			<AreaMenuText>
				<a>Explore</a>
				<a>Markeplace</a>
				<a>Artist</a>
				<a>Collection</a>
			</AreaMenuText>
	  	</AreaMenu>
		<InputSearch placeholder='Search'/>
		<Button>Sing in</Button>
    </Container>
  );
}
