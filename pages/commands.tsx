import {
  Box,
  TableHead,
  TableBody,
  Table,
  TableCell,
  Paper,
  TableContainer,
  TableRow,
  Button,
} from "@mui/material";
import Page from "@/components/Page";
import Entrance from "@/components/Entrance";
import { useState } from "react";

interface Argument {
  name: string;
  required: boolean;
}

interface Command {
  name: string;
  description: string;
  args: Argument[];
  aliases: string[] | null;
  ownerOnly: boolean;
}

function createRow(
  name: string,
  description: string,
  args: Argument[],
  aliases: string[] | null = null,
  ownerOnly: boolean = false
): Command {
  return { name, description, args, aliases, ownerOnly };
}

const rowHeaders: string[] = [
  "Description",
  "Arguments",
  "Aliases",
  "Owner Only",
];

const rows: Command[] = [
  createRow(
    "balance",
    "View your (or someone else's) balance!",
    [
      {
        name: "user",
        required: false,
      },
    ],
    ["bal"]
  ),
  createRow("buy", "Buy something from the shop", [
    {
      name: "item id",
      required: true,
    },
    {
      name: "quantity",
      required: false,
    },
  ]),
  createRow("color", "Change your skin, stomach or acid color", [
    {
      name: "skin | stomach | acid | preview",
      required: true,
    },
    {
      name: "hex code (required if type is not preview)",
      required: false,
    },
  ]),
  createRow("digest", "Finish off the prey inside of you", []),
  createRow("eat", "Turn someone into your dinner", [
    {
      name: "@user",
      required: true,
    },
  ]),
  createRow(
    "escape",
    "Attempt to escape from your captor's stomach (has a (very) small chance of success).",
    []
  ),
  createRow("extract", "Extract all the bones from your stomach", []),
  createRow("release", "Release someone (giving them some mercy).", [
    {
      name: "@user",
      required: true,
    },
  ]),
  createRow("rub", "Rub your (or someone else's) belly", [
    {
      name: "@user",
      required: false,
    },
  ]),
  createRow("shop", "View all items in the shop", []),
  createRow("spit", "Spit all over someone (disgusting)", [
    {
      name: "@user",
      required: true,
    },
  ]),
  createRow("stomach", "Check out your (or someone else's) stomach stats", [
    {
      name: "@user",
      required: false,
    },
  ]),
  createRow("toggle", "Toggle any of your settings", [
    {
      name: "usable | dmable",
      required: true,
    },
  ]),
  createRow(
    "viewcode",
    "View some of the source code!",
    [
      {
        name: "path",
        required: true,
      },
    ],
    ["view", "code", "vc"],
    true
  ),
];

export default function CommandsPage() {
  const [argIndex, setArgIndex] = useState(0);
  const [aliasIndex, setAliasIndex] = useState(0);
  const incrementColor = "#336933";
  const decrementColor = "#ff0504";

  function incrementArgIndex() {
    setArgIndex(argIndex + 1);
  }

  function decrementArgIndex() {
    setArgIndex(argIndex - 1);
  }

  function incrementAliasIndex() {
    setAliasIndex(aliasIndex + 1);
  }

  function decrementAliasIndex() {
    setAliasIndex(aliasIndex - 1);
  }

  return (
    <Page title="Commands">
      <Entrance
        title="Commands"
        description="View all the commands for Thing Bot here!"
      />
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 800 }} aria-label="Command Table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                {rowHeaders.map((header, idx) => (
                  <TableCell key={idx} align="right">
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((cmd) => (
                <TableRow
                  key={cmd.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {cmd.name}
                  </TableCell>
                  <TableCell align="right">{cmd.description}</TableCell>
                  {cmd.args.length === 0 && (
                    <TableCell align="right">None</TableCell>
                  )}
                  {cmd.args.map((arg, idx) => {
                    if (idx > cmd.args.length || idx < 0)
                      return (
                        <TableCell key={arg.name} align="right">
                          Invalid Arg
                        </TableCell>
                      );
                    if (idx !== argIndex && cmd.args.length > 1) return;

                    if (arg.required)
                      return (
                        <>
                          <TableCell
                            key={arg.name}
                            align="right"
                          >{`<${arg.name}>`}</TableCell>
                        </>
                      );
                    else
                      return (
                        <>
                          <TableCell
                            key={arg.name}
                            align="right"
                          >{`[${arg.name}]`}</TableCell>
                        </>
                      );
                  })}
                  {cmd.aliases?.map((alias, idx) => {
                    if (idx > cmd.aliases!.length || idx < 0)
                      return (
                        <TableCell key={alias} align="right">
                          Invalid Alias
                        </TableCell>
                      );
                    if (idx !== aliasIndex) return;
                    else
                      return (
                        <TableCell key={idx} align="right">
                          {alias}
                        </TableCell>
                      );
                  }) || <TableCell align="right">None</TableCell>}
                  {cmd.ownerOnly && <TableCell align="right">Yes</TableCell>}
                  {!cmd.ownerOnly && <TableCell align="right">No</TableCell>}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{ backgroundColor: "#333333", display: "flex" }}
          flex={0.5}
          textAlign="center"
          ml={10}
        >
          <Button
            sx={{ backgroundColor: incrementColor, margin: 8 }}
            onClick={incrementArgIndex}
          >
            Next Arg
          </Button>
          <Button
            sx={{ backgroundColor: decrementColor, margin: 8 }}
            onClick={decrementArgIndex}
          >
            Previous Arg
          </Button>
          <Button
            sx={{ backgroundColor: incrementColor, margin: 8 }}
            onClick={incrementAliasIndex}
          >
            Next Alias
          </Button>
          <Button
            sx={{ backgroundColor: decrementColor, margin: 8 }}
            onClick={decrementAliasIndex}
          >
            Previous Alias
          </Button>
        </Box>
      </Box>
    </Page>
  );
}
