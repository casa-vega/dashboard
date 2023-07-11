"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import {
  Text,
  TextInput,
  Textarea,
  Checkbox,
  Radio,
  RadioGroup,
  Label,
  BranchName,
  FormControl,
  Select,
  Box,
  Button,
  Timeline,
  StyledOcticon,
  Link,
} from "@primer/react";

const CustomCheckboxInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => <input type="checkbox" {...props} />;


import { WebhookIcon, FlameIcon } from "@primer/octicons-react";
import { InputHTMLAttributes } from "react";

export default function Webhook() {
  return (
    <main>
      <div className="d-inline-flex flex-shrink-0">
        <div className="p-6 d-flex flex-justify-between flex-column">
          <div className="Box">
            <div className="Box-header">
              <h3 className="Box-title">
                <WebhookIcon className="mr-1" size={16} /> Webhooks / Add
                Webhooks{" "}
                <Label variant="success" size="large">
                  beta
                </Label>
              </h3>
            </div>
            <div className="Box-body">
              Welcome to the webhooks self service portal. Here you can create,
              update and delete webhooks for your repositories. If you do not
              see the organization or repository you are looking to modify
              please contact{" "}
              <BranchName>github-self-service@salesforce.com</BranchName>.
            </div>
            <div className="Box-body">
              <Box display="grid" gridGap={3} sx={{ p: 3 }}>
                <FormControl required sx={{ width: "50%" }}>
                  <FormControl.Label>Chose an organization:</FormControl.Label>
                  <Select>
                    <Select.Option value="figma">Salesforce</Select.Option>
                    <Select.Option value="css">Heroku</Select.Option>
                    <Select.Option value="css">
                      Heroku-and salesforce
                    </Select.Option>
                  </Select>
                </FormControl>
                <FormControl required>
                  <FormControl.Label>Chose a Repository:</FormControl.Label>
                  <Select>
                    <Select.Option value="figma">React</Select.Option>
                    <Select.Option value="css">Primer CSS</Select.Option>
                    <Select.Option value="css">
                      Heroku-and salesforce
                    </Select.Option>
                  </Select>
                </FormControl>
              </Box>
              <hr></hr>
              <Box display="grid" gridGap={3} sx={{ p: 3 }}>
                <FormControl required>
                  <FormControl.Label>Payload URL</FormControl.Label>
                  <TextInput
                    sx={{ width: "300px" }}
                    placeholder="https://example.com/postrecieve"
                  />
                </FormControl>
                <FormControl required>
                  <FormControl.Label>Content type</FormControl.Label>
                  <Select>
                    <Select.Option value="x-www-form-encoded">
                      application/x-www-form-encoded
                    </Select.Option>
                    <Select.Option value="json">application/json</Select.Option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormControl.Label>Secret</FormControl.Label>
                  <TextInput sx={{ width: "300px" }} />
                </FormControl>
              </Box>
              <hr></hr>
              <Box display="grid" gridGap={3} sx={{ p: 3 }}>
                <Text sx={{ fontWeight: "bold" }}>
                  Which events would you like to trigger this webhook?
                </Text>
                <RadioGroup name="webhook">
                  <FormControl>
                    <Radio
                      name="radioChoices"
                      value="radioOne"
                      defaultChecked
                    />
                    <FormControl.Label>Just the push event.</FormControl.Label>
                  </FormControl>
                  <FormControl>
                    <Radio name="radioChoices" value="radioTwo" />
                    <FormControl.Label>Send me everything.</FormControl.Label>
                  </FormControl>
                  <FormControl>
                    <Radio name="radioChoices" value="radioThree" />
                    <FormControl.Label>
                      Let me select individual events.
                    </FormControl.Label>
                  </FormControl>
                </RadioGroup>
              </Box>
              <hr></hr>
              <Box display="grid" gridGap={3} sx={{ p: 3 }}>
                <FormControl layout="horizontal">
                  <CustomCheckboxInput
                    id="custom-checkbox-one"
                    value="checkOne"
                    checked
                  />
                  <FormControl.Label htmlFor="custom-checkbox-one">
                    Active
                  </FormControl.Label>
                  <FormControl.Caption id="custom-checkbox-one-caption">
                    We will deliver event details when this hook is triggered.
                  </FormControl.Caption>
                </FormControl>
              </Box>
            </div>
            <div className="Box-footer">
              <Box display="grid" gridGap={3} sx={{ p: 3 }}>
                <Button variant="primary" sx={{ width: "20%" }}>
                  Add webhook
                </Button>
              </Box>
            </div>
          </div>
        </div>
      </div>

      <div className="d-inline-flex flex-shrink-0">
        <div className="p-6 d-flex flex-justify-between flex-column">
          <div className="Box">
            <div className="Box-header">
              <h3 className="Box-title">
                <WebhookIcon className="mr-1" size={16} /> Webhooks / Manage
                Webhooks{" "}
                <Label variant="success" size="large">
                  beta
                </Label>
              </h3>
            </div>
            <div className="Box-body">
              <div className="Box-body">
                Welcome to the webhooks self service portal. Here you can
                create, update and delete webhooks for your repositories. If you
                do not see the organization or repository you are looking to
                modify please contact{" "}
                <BranchName>github-self-service@salesforce.com</BranchName>.
              </div>
              <Timeline>
                <Timeline.Item>
                  <Timeline.Badge>
                    <StyledOcticon icon={FlameIcon} />
                  </Timeline.Badge>
                  <Timeline.Body>
                    <Link
                      href="#"
                      sx={{ fontWeight: "bold", color: "fg.default", mr: 1 }}
                      muted
                    >
                      Monalisa
                    </Link>
                    created one{" "}
                    <Link
                      href="#"
                      sx={{ fontWeight: "bold", color: "fg.default", mr: 1 }}
                      muted
                    >
                      hot potato
                    </Link>
                    <Link href="#" color="fg.muted" muted>
                      Just now
                    </Link>
                  </Timeline.Body>
                </Timeline.Item>
              </Timeline>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
