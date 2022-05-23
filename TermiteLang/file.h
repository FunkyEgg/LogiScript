#pragma once

#include "common.h"

namespace termite::lang
{
	class File
	{
	private:
		std::string m_FileLocation;
		std::string m_FileContents;
	public:
		File(std::string fileLocation);
		~File();
		int Lines();
		inline std::string GetFileContents() { return m_FileContents; }
	private:
		void Init();
	};
}