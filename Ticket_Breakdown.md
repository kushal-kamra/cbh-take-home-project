# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1:
    Title - Adding column custom_id to table Agents, default value null

    Acceptance Criteria - Column with data type String exists in table Agent will null as default value

    Implementation Details - Write an sql db migration of type DDL, to alter table adding a new column with data type as string with default value as NULL

    Effort Estimate - 2 hours


Ticket 2:
    Title - Add custom_id in CRUD API's for Agents as an optional parameter

    Acceptance Criteria -
        1 - custom_id when passed in create(POST) and update(PUT) API's gets updated in database in table Agent
        2 - custom_id with accurate value in databse is in the result object when read(GET) api is called

    Implementation Details -
        1 - Add custom_id in db interface object for agent object
        2 - Add custom_id in POST API with data validation
        3 - Add custom_id in PUT API with data validation
        4 - Add custom_id in GET API

    Effort Estimate - 4 hours


Ticket 3:
    Title - Add custom_id on the dashboard UI and make changes in CRUD API's for Agents

    Acceptance Criteria - 
        1 - User is able to add/update value of custom_id for each agent

    Implementation Details - 
        1 - Add custom_id in ui and db interface objects for agent data object
        2 - Add field in view for Agent details
        3 - Add data validation for the custom_id field

    Effort Estimate - 3 hours


Ticket 4:
    Title - Add custom_id as value returned for each agent in agent metadata for function `getShiftsByFacility` and corresponding GET API

    Acceptance Criteria - 
        1 - For every agent, accurate corresponding custom_id is provided in metadata

    Implementation Details - 
        1 - Add 'custom_id' in the 'metadata' object corresponding to an agent, within the return object from the function
        2 - Add 'custom_id' as the column to be fetched in select query from Agent table within the execution flow
    
    Effort Estimate - 2 hours

Ticket 5:
    Title - Replace `id` for agent with `custom_id` for agent within `generateReport` output in PDF file in case `custom_id` value exists

    Acceptance Criteria -
        1 - For every agent in PDF report, `id` visible is the `custom_id` in case value exists, else use original `id`

    Implementation Details - 
        1 - When adding `id` in PDF file while generating report replace value with `customn_id` in case value exists

    Effort Estimate - 3 hours