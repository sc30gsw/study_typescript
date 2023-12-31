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
import React, { useCallback, useState } from 'react'

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
  roundedPaginationItem: {
    '& .MuiButtonBase-root': {
      borderRadius: '50% !important',
    },
  },
  menuItem: {
    '& .MuiButtonBase-root': {
      padding: '10px 15px !important',
    },
  },
})

type Props = {
  rows: { id: number; userId: number; title: string; body: string }[]
}

const StickyHeadTable: React.FC<Props> = ({ rows }) => {
  const classes = useStyles()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [selected, setSelected] = React.useState<number[]>([])

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id)
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  const handleCheckboxClick = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
      const selectedIndex = selected.indexOf(id)
      let newSelected: number[] = []

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id)
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1))
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1))
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        )
      }

      setSelected(newSelected)
    },
    [selected],
  )

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    console.log('new Page', newPage)

    setPage(newPage - 1)
  }, [])

  const handleChangeTablePage = useCallback(
    (event: unknown, newPage: number) => {
      setPage(newPage)
    },
    [],
  )

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(Number(event.target.value))
      setPage(0)
    },
    [],
  )

  return (
    <>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        slotProps={{
          select: {
            MenuProps: {
              MenuListProps: {
                sx: {
                  display: 'flex',
                  flexDirection: 'column',
                },
                classes: { root: classes.menuItem },
              },
            },
          },
        }}
        count={rows.length}
        rowsPerPage={rowsPerPage}
        labelRowsPerPage="1ページあたりの表示数"
        page={page}
        onPageChange={handleChangeTablePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={() => (
          <Pagination
            className={classes.roundedPaginationItem}
            count={Math.ceil(rows.length / rowsPerPage)}
            page={page + 1}
            onChange={handleChangePage}
            showFirstButton
            showLastButton
            color="primary"
            sx={{ ml: '10px', width: '750px' }}
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
                <TableCell
                  align="center"
                  padding="checkbox"
                  className={classes.stickyHeader}
                >
                  <Checkbox
                    color="primary"
                    indeterminate={
                      selected.length > 0 && selected.length < rows.length
                    }
                    checked={rows.length > 0 && selected.length === rows.length}
                    onChange={handleSelectAllClick}
                    inputProps={{
                      'aria-label': 'select all desserts',
                    }}
                  />
                </TableCell>
                <TableCell>Id</TableCell>
                <TableCell align="left">UserId</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Body</TableCell>
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
                      padding="checkbox"
                      className={classes.stickyHeader}
                    >
                      <Checkbox
                        color="primary"
                        checked={selected.includes(row.id)}
                        onChange={(event) => handleCheckboxClick(event, row.id)}
                      />
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
