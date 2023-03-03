import { Button, Container, Stack } from "react-bootstrap";

function App() {
  return(
    <>
      <Container className="my-3">
        <h1>Budget Tracker</h1>
        <Stack direction="horizontal" gap="3" className="mb-4">
          <h3 className="me-auto">Budgets</h3>
          <Button variant="primary">Add Budget</Button>
          <Button variant="outline-primary">Add Expense</Button>
        </Stack>
      </Container>
    </>
  )
}

export default App;