import styled from 'styled-components'
import { Form as FormikForm } from 'formik'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(320px, 1366px) 1fr;
  padding: 16px;
`

export const Content = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FormContainer = styled(FormikForm)`
  background-color: white;
  margin-top: 2.5rem;
  padding: 2.5rem;
  border: 1px solid ${props => props.theme.colors.darkestWhite};
  border-radius: 5px;
`

export const Title = styled.h5`
  width: 100%;
  text-align: center;
  margin-bottom: 16px;
`

export const Form = styled(FormikForm)`
  display: grid;
  grid-row-gap: 16px;
  width: 300px;
  max-width: 350px;
`

export const SocialButtonsContainer = styled(FormikForm)`
  display: grid;
  grid-row-gap: 16px;
`
