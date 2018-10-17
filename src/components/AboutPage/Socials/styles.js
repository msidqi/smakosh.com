import styled from 'styled-components'

export const Wrapper = styled.div`
	padding: 2rem 0;
`

export const Title = styled.h2`
	margin-bottom: 3rem;
	${({ theme }) => theme === 'dark' && `
		color: #fff;
	`}
`

export const Social = styled.div`
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: repeat(1, 4fr);
	grid-gap: 1.2rem;
	align-items: center;
	margin-bottom: 1rem;
	@media (max-width: 960px) {
		grid-template-columns: repeat(4, 1fr);
	}
`