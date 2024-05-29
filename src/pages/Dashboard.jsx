// src/pages/Dashboard.js
import React from 'react';
import { Routes, Route, Link, useResolvedPath, useMatch } from 'react-router-dom';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import ActiveSaleOrdersPage from './ActiveSaleOrdersPage';
import CompletedSaleOrdersPage from './CompletedSaleOrdersPage';
import ThemeToggle from '../components/ThemeToggle';

function Dashboard() {
  let resolvedPath = useResolvedPath('');
  let matchActive = useMatch(`${resolvedPath.pathnameBase}/active`);
  let matchCompleted = useMatch(`${resolvedPath.pathnameBase}/completed`);

  return (
    <Box>
      <ThemeToggle />
      <Tabs>
        <TabList>
          <Tab as={Link} to={`${resolvedPath.pathnameBase}/active`} isSelected={!!matchActive}>Active Sale Orders</Tab>
          <Tab as={Link} to={`${resolvedPath.pathnameBase}/completed`} isSelected={!!matchCompleted}>Completed Sale Orders</Tab>
        </TabList>

        <TabPanels>
          <Routes>
            <Route path="active" element={<ActiveSaleOrdersPage />} />
            <Route path="completed" element={<CompletedSaleOrdersPage />} />
          </Routes>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Dashboard;
