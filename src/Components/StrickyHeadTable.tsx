'use client'
import Checkbox from '@material-ui/core/Checkbox'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import { Pagination } from '@mui/material'
import Table from '@mui/material/Table'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import React, { useState } from 'react'

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
    transform: 'rotateX(180deg)',
  },
  content: {
    transform: 'rotateX(180deg)',
  },
  stickyHeader: {
    position: 'sticky',
    left: 0,
    zIndex: 1,
    backgroundColor: '#fff',
  },
  cell: {
    minWidth: 400,
  },
})

type Props = {
  rows: { id: number; userId: number; title: string; body: string }[]
}

const StickyHeadTable: React.FC<Props> = ({ rows }) => {
  const classes = useStyles()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage - 1)
  }

  const handleChangeTablePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        labelRowsPerPage="1ページあたりの表示数"
        page={page}
        onPageChange={handleChangeTablePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={() => (
          <Pagination
            count={Math.ceil(rows.length / rowsPerPage)}
            page={page + 1}
            onChange={handleChangePage}
            showFirstButton
            showLastButton
            sx={{ ml: '10px', width: '650px' }}
          />
        )}
      />
      <Paper className={classes.root}>
        <TableContainer>
          <Table
            stickyHeader
            aria-label="sticky table"
            className={classes.content}
          >
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Id</TableCell>
                <TableCell align="left">UserId</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Body</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.stickyHeader}
                    >
                      <Checkbox />
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.cell}
                    >
                      {row.id}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.cell}
                    >
                      {row.userId}
                    </TableCell>
                    <TableCell align="left" className={classes.cell}>
                      {row.title}
                    </TableCell>
                    <TableCell align="left" className={classes.cell}>
                      {row.body}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  )
}

export default StickyHeadTable
