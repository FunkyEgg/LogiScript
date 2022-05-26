#pragma once

#include "common.h"

namespace termite::lang
{
	class File
	{
	private:
		std::string m_FileLocation;
		std::string m_FileContents;
		int m_FileLines;
	public:
		File(std::string fileLocation);
		~File();

		inline std::string GetFileContents() { return m_FileContents; }
		inline int GetFileLines() { return m_FileLines; }
	private:
		void Init();
	};
}